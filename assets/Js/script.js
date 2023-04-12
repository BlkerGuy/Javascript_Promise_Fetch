"use strict";


let card_size_days=document.querySelectorAll('.card-size-other-days button');

for(let i=0; i<card_size_days.length; i++){
    card_size_days[i].addEventListener('click',()=>{
        card_size_days[0].classList.remove("active")
    })
}


let form = document.querySelector('form');
let inp = document.querySelector('input');
let img = document.querySelector('.img');

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        // img.src = 'https://i.stack.imgur.com/hzk6C.gif';
        // const response = await fetch(`https://source.unsplash.com/random/900×700/?${inp.value}`);
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id={${inp.value}}&appid={d479d3bf9c94ea562ecd0cc819118096}&lang={az}`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=d479d3bf9c94ea562ecd0cc819118096&lang=az&units=metric`);
        console.log(response);

        let country=document.querySelector('#country');
        // country.innerText=response.arrayBuffer.prototype()

        
        // img.src = response.url;
    } catch (err) {
        console.log(err);
    }


})


