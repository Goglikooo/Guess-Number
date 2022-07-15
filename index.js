var x = parseInt(Math.random()*20)
var word = document.querySelector('.inp')
var number = document.querySelector('.myh1')
var counter = document.querySelector('.tries')
var usercounter1 = document.querySelector('.userscore')
var button1 = document.querySelector('.butt')
var compwin1 = document.querySelector('.compwin')
compwin2 = 0
counter1 = 5
var usercounter = 0
console.log(x)

function guess(){
    counter1--
    numberguess()
    winning()
    
}
function numberguess(){
    
    if(word.value==x && word.value !==''){
        number.style.color = 'green' 
        usercounter++
        usercounter1.innerText = "User Score:" + usercounter
        document.querySelector('.number1').reset()
        number.innerText = 'You Win! Hit "Next Round" to Play'
        counter.innerText = " "
        button1.disabled = true
        word.disabled = true

    }else if(word.value>x+3 && word.value<=20 && word.value !==""){
        number.innerHTML = 'Lower'
        number.style.color = 'red'
        document.querySelector('.number1').reset() 
        
    }   else if(word.value<x-3 && word.value <= 20 && word.value !==""){
        number.innerHTML = "higher"
        number.style.color = 'red'
        document.querySelector('.number1').reset() 
        
    }   else if(x-3 < word.value < x+3){
        number.innerHTML = 'you are close'
        number.style.color = 'red'
        document.querySelector('.number1').reset()


    }   else if(word.value ==''){
        number.innerHTML = "You must enter a number first"
        counter1+=1
    }
    counter.innerText = 'Tries Left:' + counter1
}


function nextround(){
    button1.disabled = false
    counter1 = 5
    counter.innerText = "Tries Left:5"
    x = parseInt(Math.random()*20)
    console.log(x)
    number.innerText = "Enter Your number and click on Guess button!"
    number.style.color = "black"
    word.disabled = false
}

function winning(){
    if(counter1==0 && word.value!==x){
        compwin2++
        var compwin1 = document.querySelector('.compwin')
        compwin1.innerText = 'Computer Score:'+ compwin2
        number.innerText = 'You Lose! Hit "Next Round" to Replay'
        button1.disabled = true
        word.disabled = true
    }
}

function reset() {
    compwin2 = 0
    counter1 = 5
    usercounter = 0
    button1.disabled = false
    word.disabled = false
    x = parseInt(Math.random()*20)
    counter.innerText = "Tries Left:5"
    number.innerText = "Enter Your number and click on Guess button!"
    number.style.color = "black"
    compwin1.innerText = 'Computer Score:'+ compwin2
    usercounter1.innerText = "User Score:" + usercounter
    console.log(x)
    
}