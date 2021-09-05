const quotes = [
    {
        quote:'그러나 사랑은 눈 먼 것이라 연인들은 자신들이 저지르는 어리석은 짓을 알지 못해요. 만약 알 수 있다면, 큐피드도 나를 보고 얼굴을 붉히며 평범한 소년으로 변해버릴 거예요.',
        author:'윌리엄 세익스피어'
    },
    {
        quote:'사랑은 아름다운 여자를 만나서부터 그녀가 꼴뚜기처럼 생겼음을 발견하기까지의 즐거운 시간이다.',
        author:'존 베리모어'
    },
    {
        quote:'나이가 들어도 사랑을 막을 수는 없어요. 하지만 사랑은 노화를 어느 정도 막을 수 있죠.',
        author:'잔느 모로'
    },
    {
        quote:'사랑이란 서로 마주보는 것이 아니라 둘이서 똑같은 방향을 내다보는 것이라고 인생은 우리에게 가르쳐 주었다.',
        author:'생텍쥐페리'
    },
    {
        quote:'만약 우리가 어떻게 느꼈는지 남들에게 항상 말한다면 얼마나 끔찍할지 상상할 수 있어? 인생은 견딜 수 없을 만큼 견딜만할 거야.',
        author:'랜디 K. 멀홀랜드'

    },
    {
        quote:'진정한 사랑은 영원히 자신을 성장시키는 경험이다.',
        author:'M. 스캇 팩'
    },
    {
        quote:'사랑은 증오의 소음을 덮어버리는 쿵쾅대는 큰 북소리다.',
        author:'마가릿 조'
    },
    {
        quote:'사랑은 끝없는 용서의 행위이며, 습관으로 굳어지는 상냥한 표정이다.',
        author:'해브록 엘리스'
    },
    {
        quote:'중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다.',
        author:'윌리엄 서머셋 모옴'
    },
    {
        quote:'사랑은 모두가 기대하는 것이다. 사랑은 진정 싸우고 용기를 내고, 모든 것을 만하다.',
        author:'에리카 종'
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQoute.quote;
author.innerHTML = '<br> -'+ todaysQoute.author + '-';