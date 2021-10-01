const getCookie = (name) => {
    let value = "; " + document.cookie;

    let parts = value.split(`; ${name}=`)
    //; user_id= 기준으로 자른다. 두번째 값에서 세미콜론으로 자르면 값을 얻을 수 있다. 나중에 추가적인 연산을 하기 싫어서 이렇게 만듦

    if(parts.length === 2){
        return parts.pop().split(";").shift();
    }
};

const setCookie = (name, cValue, expDay) => {
    const date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * expDay)
    document.cookie = `${name}=${cValue}; expires=${date.toUTCString()};path=/`
};

const deleteCookie = (name) => {
    let date = new Date("2020-01-01").toUTCString();

    // console.log(date);

    document.cookie = name+"=; expires="+date;


};

export {getCookie, setCookie, deleteCookie};