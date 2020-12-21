const TTS = () => {
    let messageObject = null
    let isReading = false
    let error = null
    let ready = null

    const initMessageObject = (params) => {
        if (!('speechSynthesis' in window)) {
            console.log("Sorry, your browser doesn't support text to speech!")
            return false
        }

        if (!messageObject) {
            messageObject = new SpeechSynthesisUtterance()
        }

        if (params && params.lang) {
            messageObject.lang = params.lang
        }

        return true
    }

    const readText = (text, lang = 'es-MX') => {
        if (ready && !isReading) {

            messageObject.lang = lang

            messageObject.text = text
            window.speechSynthesis.speak(messageObject)
        }
    }

    ready = initMessageObject({
        lang: 'es-MX'
    })

    if (messageObject !== null) {
        messageObject.addEventListener('start', function (event) {
            console.log('We have started uttering this speech: ' + event.utterance.text)
            isReading = true
        })
    
        messageObject.addEventListener('end', function (event) {
            console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' milliseconds.')
            isReading = false
        })
    
        messageObject.addEventListener('resume', function (event) {
            console.log('Speech resumed after ' + event.elapsedTime + ' milliseconds.')
            isReading = true
        })
    
        messageObject.addEventListener('pause', function (event) {
            console.log('Speech paused after ' + event.elapsedTime + ' milliseconds.')
            isReading = false
        })
    
        messageObject.addEventListener('error', function (event) {
            console.log('An error has occurred with the speech synthesis: ' + event.error)
            error = event.error
        })
    }

    return {
        isReading,
        error,
        readText
    }
}