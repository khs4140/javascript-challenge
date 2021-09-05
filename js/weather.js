// geolocation !!
// arguments =  성공시 callback 함수, 실패시 callback 함수 !!

// 위치를 알아냈으면 위 주소로 가서 api를 가져와 날씨 얻어옴
//https://openweathermap.org/api 

// [ api 불러올 때 ]
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api keys : 1eff4cc94b31322e900779a6eed9fd83

// api.openweathermap.org/data/2.5/weather?lat=37.6689979&lon=127.0507572&appid=1eff4cc94b31322e900779a6eed9fd83


const API_KEYS = "1eff4cc94b31322e900779a6eed9fd83"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("You live it", lat, lng);

    // &units=metric 섭씨온도로 변경
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child')
            city.innerHTML = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      // fetch 서버의 응답을 기다려 ? then 그다음 
    });
}


function onGeoError() {
    alter("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


