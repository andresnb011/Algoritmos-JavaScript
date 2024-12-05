function saludar(){
    console.log("Hola mundo");
    alert("Hello World");
}

// Algoritmo que realice una suma entre dos valores ingresados por el usuario

function suma(){
    // Declarar las variables necesarias para la ejecucion del algoritmo
    let n1 = 0
    let n2 = 0
    let suma = n1+n2
    // Solicitar y capturar los valores solicitados por el usuario.
    n1 = parseInt(prompt("Porfavor ingrese el primer valor a sumar"))
    n2 = parseInt(prompt("Porfavor ingrese el segundo valor a sumar"))
    // Realizar el procedimiento
    suma = n1+n2
    // Imprimir el resultado al usuario
    console.log('El resultado de la suma es ' + suma)
    alert('El resultado de la suma es ' + suma)
}

// Algoritmo que realice una suma, resta, multiplicacion o divison entre dos valores ingresados por el usuario

function opebas(){
    let nu1 = 0
    let nu2 = 0
    let sum = 0
    let res = 0
    let mult = 0
    let div = 0

    nu1=parseInt(prompt('Porfavor ingresa el primer valor'))
    nu2=parseInt(prompt("Porfavor ingrese el segundo valor"))
    sum = nu1 + nu2
    res = nu1 - nu2
    mult = nu1 * nu2
    div = nu1 / nu2

    console.log('El resultado de la suma es ' + sum)
    alert('El resultado de la suma es ' + sum)

    console.log('El resultado de la resta es ' + res)
    alert('El resultado de la resta es ' + res)

    console.log('El resultado de la multiplicación es ' + mult)
    alert('El resultado de la multiplicación es ' + mult)

    console.log('El resultado de la división es ' + div)
    alert('El resultado de la división es ' + div)
}

// Algoritmo que eleve un numero al cuadrado
function cuadrado(){
    let c1 = 0
    let cuad = 0

    c1=parseInt(prompt('Porfavor ingresa el valor que deseas elevar al cuadrado'))
    cuad = c1*c1

    console.log('El resultado al cuadrado es ' + cuad)
    alert('El resultado al cuadrado es ' + cuad)
}

// Realice un algoritmo que determine el area de un triangulo segun los valores ingresados por el usuario b*h/2

function areatrian(){
    let b = 0
    let h = 0

    b=parseInt(prompt('Porfavor ingrese la base del triangulo'))
    h=parseInt(prompt('Porfavor ingrese la altura del triangulo'))
    area= (b*h)/2

    console.log('El area del triangulo es ' + area)
    alert('El area del triangulo es ' + area)
}

//Realizar un algoritmo que determine la medida en KM, MTS Y CMS de un valor dado en pulgadas

function convunidades(){
    let v = 0
    let km = 0
    let mt = 0
    let cm = 0

    v=parseInt(prompt('Porfavor ingrese el valor a convertir en pulgadas'))
    km= v * 0.0000254
    mt= v * 0.0254
    cm= v * 2.54

    console.log('Las pulgadas dadas en kilometros equivalen a ' + km)
    alert('Las pulgadas dadas en kilometros equivalen a ' + km)

    console.log('Las pulgadas dadas en metros equivalen a ' + mt)
    alert('Las pulgadas dadas en metros equivalen a ' + mt)

    console.log('Las pulgadas dadas en centimetros equivalen a ' + cm)
    alert('Las pulgadas dadas en centimetros equivalen a ' + cm)
}


    // Realizar un algoritmo que le pregunte al usuario a que moneda desea convertir el peso colombiano entre dolar, euro y yenes

    function convmoneda (){

    let moneda=0;
    let result=0;
    const dolar=0.00023;
    const euro=0.00021;
    const yen=0.035;

    moneda=parseInt(prompt('Porfavor ingrese la cantidad de pesos con los que cuenta'))
    conversion=parseInt(prompt('Ingrese a que moneda va a convertir su capital. Ingrese 1 para dolar, 2 para euro y 3 para yen'))

    switch (conversion) {
        case 1:
            result=moneda*dolar
            console.log('El equivalente de su dinero a dolares es de ' + result)
            alert('El equivalente de su dinero a dolares es de ' + result)
            break;
    
        case 2:
            result=moneda*euro
            console.log('El equivalente de su dinero a euros es de ' + result)
            alert('El equivalente de su dinero a dolares es de ' + result)
            break;

        case 3:
            result=moneda*yen
            console.log('El equivalente de su dinero a yenes es de ' + result)
            alert('El equivalente de su dinero a dolares es de ' + result)
            break;
    }
    }


    // Algoritmo que determine si un numero es par o impar

    function parImpar () {

        let num=0;

        num=parseInt(prompt('Ingrese el valor del que desea saber si es par o impar'));
        if (num%2==0){
            console.log('El numero ingresado es par');
        alert('El numero ingresado es par')
        } else {
        console.log('El numero ingresado es impar')
        }
    }
    // Algoritmo que determine el mayor entre dos numeros dados por el usuario

    function mayorMenor () {

        let m1 = 0
        let m2 = 0

        m1=parseInt(prompt('Ingrese el primer valor'))
        m2=parseInt(prompt('Ingrese el segundo valor'))

        if (m1===m2) {
            alert("Los dos números son iguales");
        } else if (m1>m2) {
            alert (m1 + " es mayor que " + m2);
        } else {
            alert (m2 + " es mayor que " + m1)
        }
    }
    // Algoritmo que determine el menor de tres numeros dados por el usuario

    function menorTres () {

        let men1 = 0
        let men2 = 0
        let men3 = 0

        men1=parseInt(prompt('Ingrese el primer valor'))
        men2=parseInt(prompt('Ingrese el segundo valor'))
        men3=parseInt(prompt('Ingrese el tercer valor'))

        if ((men1==men2) && (men1==men3)){
            alert("Los tres valores son iguales")
        } else if ((men1<men2) && (men1<men3)){
            alert(men1 + " es el número menor de los tres ingresados")
        } else if ((men2<men1) && (men2<men3)){
            alert(men2 + " es el número menor de los tres ingresados")
        } else{
            alert(men3 + " es el número menor de los tres ingresados")
        }
        }   

    
    // El colegio ABC requiere un sistema que le permita validar a X estudiante si aprobó o reprobó X materia teniendo en cuenta que son nueve notas del 1 al 10 y se aprueba con una nota de 6.1 en adelante

    function promedio (){
        let nombre=""
        let materia=""
        let n1, n2, n3, n4, n5, n6, n7, n8, n9=0
        let promedio

        nombre=prompt('Ingrese el nombre del estudiante')
        materia=prompt('Ingrese el nombre de la materia')
        n1=parseInt(prompt('Ingrese las notas'))
        n2=parseInt(prompt('Ingrese las notas'))
        n3=parseInt(prompt('Ingrese las notas'))
        n4=parseInt(prompt('Ingrese las notas'))
        n5=parseInt(prompt('Ingrese las notas'))
        n6=parseInt(prompt('Ingrese las notas'))
        n7=parseInt(prompt('Ingrese las notas'))
        n8=parseInt(prompt('Ingrese las notas'))
        n9=parseInt(prompt('Ingrese las notas'))

        promedio=(n1+n2+n3+n4+n5+n6+n7+n8+n9)/9
        console.log('El promedio de las notas es de ' + promedio)
        alert('El promedio de las notas es de ' + promedio)

        if (promedio<6.1){
            alert('El estudiante reprobo')}
        else if (promedio>=6.1)
            alert('El estudiante aprobo')
    }


    // Un individuo desea invertir su capital en un banco y reqioere saber cuanto dinero ganará despues de N número de años, teniendo en cuenta que el banco paga un interés mensual del 0,7 %

    function invBanco (){
        let capital=0;
        let tiempo=0;
        let interes=0;
        let total=0;

        interes= (capital*0.084)*tiempo;
        total=capital+interes
    }