const clock = document.querySelector('#clock');

// setInterval : 매번 일어날 떄마다 ( 특정 시간마다 실행 )
 
// function sayHello() {
//     console.log('Hello~');
// }

// 5초마다 실행!
// setInterval(sayHello, 5000);

// setTimeout : 5초뒤에 실행!
// setTimeout(sayHello, 5000);

// -----------------------

// Date 객체

// const hours = new Date().getHours();     // 시
// const minutes = new Date().getHours();   // 분
// const seconds = new Date().getSeconds(); // 초


// function getClock() {
//     const date = new Date();
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

// }
// // 공백시간 없이 즉시호출 + 1초마다 실행
// getClock();  // 즉시 호출
// setInterval(getClock, 1000); // 매 1초마다 실행


// 1, 2, 3 표시 => 02, 03, 04로 표시 : "1".padStart(2, "0"), "2".padStart(2, "0")
// 1, 2, 3 표시 => 10, 20, 03로 표시 : "1".padEnd(2, "0"), "2".padEnd(2, "0")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `현재시간 : ${hours}:${minutes}:${seconds}`
}

getClock();  // 즉시 호출
setInterval(getClock, 1000); // 매 1초마다 실행
