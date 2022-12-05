const buttonChoose=document.querySelector('.valyutaWIW')
const buttonGet=document.querySelector('.valyutaWIG')
const buttonChooseLiW=document.querySelectorAll('.valyutaWIW>li')
const buttonChooseLiG=document.querySelectorAll('.valyutaWIG>li')
let inputNumberW=document.querySelector('.myInputW')
let inputNumberG=document.querySelector('.myInputG')
let informationW=document.querySelector('.informationW')
let informationG=document.querySelector('.informationG')
let eventWIW='RUB'
let eventWIG='USD'
let inputDynamic=inputNumberW.value=1
let keyInput='left'
let array={}
Array(eventWIW,eventWIG)
buttonChoose.addEventListener('click',(event)=>{
    buttonChooseLiW.forEach(li=>{li.style.backgroundColor='white'})
    event.target.style.backgroundColor='purple'
    eventWIW=event.target.innerHTML
    Array(eventWIW,eventWIG)
    
})
buttonGet.addEventListener('click',(event)=>{
  buttonChooseLiG.forEach(li=>{li.style.backgroundColor='white'})
  event.target.style.backgroundColor='purple'
  eventWIG=event.target.innerHTML
  Array(eventWIW,eventWIG)
  
})
inputNumberW.addEventListener('input',(event)=>{
    inputDynamic=event.target.value
    keyInput='left'
    GetCal(eventWIW,eventWIG,keyInput)
})
inputNumberG.addEventListener('input',(event)=>{
    inputDynamic=event.target.value
    keyInput='right'
    GetCal(eventWIW,eventWIG,keyInput)
})
function Array(eventWIW,eventWIG){
  if(!array[`${eventWIW}-${eventWIG}`]){
    Fetch(eventWIW,eventWIG);
    
  }
  CallFunction()
}
function Fetch(optionW,optionG,){
  fetch(`
  https://api.exchangerate.host/latest?base=${optionW}&symbols=${optionG}`)
   .then((response)=>response.json())
   .then(data=>{
    array[`${eventWIW}-${eventWIG}`]=data.rates[`${optionG}`]
    CallFunction()
   })
   fetch(`
   https://api.exchangerate.host/latest?base=${optionG}&symbols=${optionW}`)
   .then(response=>response.json())
   .then(data=>{
    array[`${eventWIG}-${eventWIW}`]=data.rates[`${optionW}`]
    console.log(array)
    CallFunction()
   }) 
     
}
function TextLine(eventWIW,eventWIG){
   informationW.innerHTML=`1 ${eventWIW}= ${array[`${eventWIW}-${eventWIG}`]} ${eventWIG}`
   informationG.innerHTML=`1 ${eventWIG}= ${array[`${eventWIG}-${eventWIW}`]} ${eventWIW}`
}
function GetCal(eventWIW,eventWIG,key){
  (key=='left')?inputNumberG.value=inputDynamic*array[`${eventWIW}-${eventWIG}`]:inputNumberW.value=inputDynamic*array[`${eventWIG}-${eventWIW}`]}
function CallFunction(){
  TextLine(eventWIW,eventWIG)
  GetCal(eventWIW,eventWIG,keyInput)
}


