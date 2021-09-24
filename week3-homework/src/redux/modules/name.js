import {db} from "../../firebase";
import {
    doc,
    setDoc
} from "firebase/firestore";


const ADD_NAME = "name/ADD_NAME";

export const addName = (user_name) => {
    console.log("이름 추가합니다잉");
    return {type: ADD_NAME, user_name}
};

const initialState ={
    name: ["페페"],
}

//middlewares
export const addNameFB = (name) => {
    return async function (dispatch) {
        dispatch(addName(name));
        await setDoc(doc(db, "name", "quizname"), {
            name: name
        });

        dispatch(addName(name));
    }
}

export default function reducer(state = initialState, action={}) {
    switch(action.type) {
        case "name/ADD_NAME": {
            console.log(action);
            const new_name = [action.user_name]
            console.log(new_name);

            return {name: new_name};
        }
        default:
            return state;
    }
}