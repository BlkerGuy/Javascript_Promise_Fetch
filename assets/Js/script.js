"use strict";


let card_size_days = document.querySelectorAll('.card-size-other-days button');

for (let i = 0; i < card_size_days.length; i++) {
    card_size_days[i].addEventListener('click', () => {
        card_size_days[0].classList.remove("active")
    })
}


let form = document.querySelector('form');
let inp = document.querySelector('input');
let img = document.querySelector('.img');

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=d479d3bf9c94ea562ecd0cc819118096&lang=az&units=metric`)
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=d479d3bf9c94ea562ecd0cc819118096&lang=az&units=metric`)
        .then(function (resp) { return resp.json() })
            .then(function (data) {

                console.log(data);
                
                drawWeather(data);
            })

        function drawWeather(d) {
            // debugger;
            var celcius = Math.round(parseFloat(d.main.temp));
            var description = d.weather[0].description;

            document.querySelector('#location').innerHTML =d.name + ", " + d.sys.country;
            document.querySelector('#air-situation').innerHTML =description;
            document.querySelector('#celcius').innerHTML =`${celcius}<sup>o</sup>C`;
            document.querySelector('#humidity').innerHTML =`${d.main.humidity}%`;
            document.querySelector('#wind').innerHTML =`${d.wind.speed}%`;
            document.querySelector('#pressure').innerHTML =`${d.main.pressure}mbar`;


            if (description.indexOf('rain') > 0) {
                document.body.className = 'rainy';
            } else if (description.indexOf('cloud') > 0) {
                document.body.className = 'cloudy';
            } else if (description.indexOf('sunny') > 0) {
                document.body.className = 'sunny';
            } else {
                document.body.className = 'clear';
            }
        }
    } catch (err) {
        console.log(err);
    }


})


