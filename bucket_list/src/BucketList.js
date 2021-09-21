// 리액트 패키지를 불러옵니다.
import React from 'react'; 

const BucketList = ({ list }) => {
const my_lists = list;
const my_wrap = React.useRef(null);

console.log(my_wrap);

window.setTimeout(() => {
    console.log(my_wrap);
}, 1000);
return (
<div ref={my_wrap}>
{
my_lists.map((list, index) => {
// 콘솔을 확인해봅시다 :)
console.log(list);
return (<div className="list-item" key={index}>{list}</div>);
})
}
</div>
);
}

export default BucketList;