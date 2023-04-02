"use strict";

let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let plus=document.getElementById('plus');
let minus=document.getElementById('minus');
let multiplication=document.getElementById('multiplication');
let divided=document.getElementById('divided');
let result=document.getElementById('result');

let rsl=result.ariaValueMax;

plus.addEventListener('click', ()=>{
    if(num1.value && num2.value){
        result.value=(`${Number(num1.value)+Number(num2.value)}`);
        num1.value='';
        num2.value='';
    }
    else{
        alert('Deyer daxil edin!');
    }
})

minus.addEventListener('click', ()=>{
    if(num1.value && num2.value){
        result.value=(`${Number(num1.value)-Number(num2.value)}`);
        num1.value='';
        num2.value='';
    }
    else{
        alert('Deyer daxil edin!');
    }
})

multiplication.addEventListener('click', ()=>{
    if(num1.value && num2.value){
        result.value=(`${Number(num1.value)*Number(num2.value)}`);
        num1.value='';
        num2.value='';
    }
    else{
        alert('Deyer daxil edin!');
    }
})

divided.addEventListener('click', ()=>{
    if(num1.value && num2.value){
        result.value=(`${Number(num1.value)/Number(num2.value)}`);
        num1.value='';
        num2.value='';
    }
    else{
        alert('Deyer daxil edin!');
    }
})