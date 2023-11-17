const ArrayNum = [ 1,2,3,4,5,6,7,8,9,10];

const [pos0,pos1,pos2,pos3,pos4, ...restN] = ArrayNum

const numerosDispuestos = [pos0,pos2,pos4]

const restoNumeros = [pos1,pos3, ...restN]


//console.log(numerosDispuestos);
//console.log(restoNumeros);