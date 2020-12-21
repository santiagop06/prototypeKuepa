/**
 * type: handle de tipo de pregunta, mas grande o mas pequeño, 0= mas grande, 1=mas pequeño
 * img:Array de strings con el src de las imagenes que se van a mostrar,
 * correct: posicion en img[] que es la respuesta correcta
 */

var arrayImg =[
    [
        {type:1,image:'image 2.png',},
        {type:1,image:'image 4.png',},
        {type:1,image:'image 6.png',},
        {type:1,image:'image 8.png',},
        {type:1,image:'image 10.png',},
        {type:0,image:'image 3.png',},
        {type:0,image:'image 5.png',},
        {type:0,image:'image 7.png',},
        {type:0,image:'image 9.png',},

    ],
    [
        {type:1,image:'image 2.png',},
        {type:1,image:'image 4.png',},
        {type:1,image:'image 6.png',},
        {type:1,image:'image 8.png',},
        {type:1,image:'image 10.png',},
        {type:0,image:'image 3.png',},
        {type:0,image:'image 5.png',},
        {type:0,image:'image 7.png',},
        {type:0,image:'image 9.png',},
    ],
    [
        {type:1,image:'image 2.png',},
        {type:1,image:'image 4.png',},
        {type:1,image:'image 6.png',},
        {type:1,image:'image 8.png',},
        {type:1,image:'image 10.png',},
        {type:0,image:'image 3.png',},
        {type:0,image:'image 5.png',},
        {type:0,image:'image 7.png',},
        {type:0,image:'image 9.png',},
    ],
    [
        {type:1,image:'image 2.png',},
        {type:1,image:'image 4.png',},
        {type:1,image:'image 6.png',},
        {type:1,image:'image 8.png',},
        {type:1,image:'image 10.png',},
        {type:0,image:'image 3.png',},
        {type:0,image:'image 5.png',},
        {type:0,image:'image 7.png',},
        {type:0,image:'image 9.png',},
    ],
]

var nivelList=[
    {min:0, max:40},
    {min:35, max:70},
    {min:65, max:100}
]

var scoreList= getScoreList(25,0.25)

console.log('factorial de arr', getScoreList(25,0.25))

