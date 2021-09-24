const ADD_ANSWER = "quiz/ADD_ANSWER";
const CLEAR_ANSWER = "quiz/CLEAR_ANSWER";

export const addAnswer = (user_answer) => {
    console.log("다음 문제로 넘어갑니다잉");
    return {type: ADD_ANSWER, user_answer}
}

export const clearAnswer = () => {
    return {type: CLEAR_ANSWER}
}

const initialState = {
    quiz_list: [
        {quiz: "개구리는 개굴개굴 울까요?",answer: true},
        {quiz: "페페는 다람쥐일까요?", answer: false},
        {quiz: "개구리는 앞다리가 먼저 나올까요?",answer: false},
        {quiz: "개구리는 보통 파란색인가요?",answer: false},
        {quiz: "올챙이는 꼬물꼬물 헤엄치나요?",answer: true}
    ],
    user_answer_list: [],
};



export default function reducer(state = initialState, action={}) {
    switch (action.type) {
        case "quiz/ADD_ANSWER": {
            console.log(action);
            const new_user_answer_list = [...state.user_answer_list, action.user_answer];

            console.log(new_user_answer_list);
            return {...state, user_answer_list: new_user_answer_list};
        }
        case "quiz/CLEAR_ANSWER": {
            return {...state, user_answer_list: []};
        }
        default:
            return state;
    }
}



