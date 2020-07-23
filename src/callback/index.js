//Example1
function sum(num1, num2) {
    return num1+num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(8,2,sum));
//Example2 
function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}
function printDate(dateNow){ //Esta es nuestra funcion callback que pasaremos por parametros a la funcion de arriba
    console.log(dateNow);
}

date(printDate);