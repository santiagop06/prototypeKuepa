/**
 * Metodo que halla el factorial de un entero
 * @param {*} n 
 */
const factorial=(n)=>{
    if (n!==0){
        let acc=1;
        for(i=1; i<=n;i++){
            acc= i*acc;
        }
        return acc;
    }else{
        return 1;
    }
}
/**
 * Factorial de los numeros enteros de un array
 * @param {array de numeros enteros} arr 
 */
const factorialArr=(arr)=>{
    return arr.map((index)=> factorial(index))
}
/**
 * Multiplica vector por vector
 * @param {Array de numeros} arr1 
 * @param {Array de numeros} arr2 
 */
const multiplyArr=(arr1,arr2)=>{
    return arr1.map((index, i)=> index*arr2[i] )
}
/**
 * Potencia de escalar^vector
 * @param {numero} num 
 * @param {Array de numeros} arr 
 */
const powArr=(num, arr)=>{
    return arr.map((index)=> Math.pow(num, index))
}
/**
 * Resta de escalar a vector
 * @param {numero} num 
 * @param {Array de numeros} arr 
 */
const subsArr=(num, arr)=>{
    return arr.map((index)=> num-index)
}
/**
 * Division escalar/vector
 * @param {numero} num 
 * @param {Array de numeros} arr2 
 */
const divArr=(num,arr2)=>{
    return arr2.map((index)=> num/index)
}

/**
 * Funcion que retorna el array de score
 * @param {numero de preguntas} n 
 * @param {numero?} p 
 */
const getScoreList=(n,p)=>{

    let x= []
    let i=1;
    while(x.length<n){
        x.push(i)
        i++;
    }
    const f1= factorial(n);
    const f2= factorialArr(x);
    const f3= x.map((index)=> factorial(n-index))
    const f4= multiplyArr(f2,f3)
    const f5= powArr(p,x)
    const f6= powArr((1-p),subsArr(n,x))
    const correctValue= multiplyArr(multiplyArr(divArr(f1,f4),f5),f6)
    
    const res= correctValue.map((value, i)=>  ({key:i+1, correct:parseFloat(value.toFixed(2))*100, incorrect:parseFloat((value/3).toFixed(2))*100 }))
    return res;
}