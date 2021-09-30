function changeBackgroundColor (index) {
    let card = document.getElementsByClassName('todo-wrapper')[index];
    card.style.backgroundColor = "gray";
}

function sayHello(event) {
    console.log("hello!");
}



const wraps = document.getElementsByClassName("wrap");
console.log(wraps);
for(let i=0; i<wraps.length; i++) {
    wraps[i].addEventListener('click', sayHello);
}


const wraps2 = document.querySelector(".wrap");
console.log(wraps2);
for(let i=0; i<wraps2.length; i++) {
    wraps2[i].addEventListener('click', sayHello);
}

//정리: querySelector를 쓰면 유사배열의 장점을 활용할 수 없다!!

const title = document.getElementById("title");
console.log(title);

const title2 = document.querySelector('#title');
console.log(title2);
// ID는 차이가 없는데 Class는 차이가 있다. 이게 querySelector를 비추하는 이유인가?

title.style.backgroundColor = "yellow";
title2.style.backgroundColor = "yellow";
//둘다 적용된다.

const buttons = document.getElementsByTagName("button");
console.log(buttons);

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", sayHello);
}

// 왜 addEventListener를 쓰면 클릭하기도 전에 색이 칠해질까?

const new_div = document.createElement("div");
new_div.style.backgroundColor = "green";
new_div.style.width = "100px";
new_div.style.height = "100px";
console.log(new_div);
document.body.appendChild(new_div);
