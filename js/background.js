const images = [
    '0.JPG',
    '1.JPG',
    '2.JPG'
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML 태그 추가
// Elements에는 없지만 사용 가능!! 
// const bgImage = document.createElement('img');

// bgImage.src = 'img/' + chosenImage;

// // body 태그 내부에 추가 

// document.body.appendChild(bgImage);

const bodyTag = document.querySelector('body');

console.dir(bodyTag);

bodyTag.style = `background-image : url(./img/${chosenImage}); background-size : cover; background-repeat:no-repeat`;
