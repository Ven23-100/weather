var button=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
var name=document.querySelector('.name');
var temp=document.querySelector('.temp');
var desc=document.querySelector('.desc');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8cbd8bc389c601ba0b5be465f5f1b511')
.then(response=> response.json())
.then(data => {
    var nameValue=data['name'];
    var tempValue=data['main']['temp'];
    var descValue=data['weather'][0]['description'];

    name.innerHTML=nameValue;
    temp.innerHTML=tempValue;
    desc.innerHTML= descValue;
})
.catch(err => alert(" Enter a correct city name"))
})