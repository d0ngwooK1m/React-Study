// bucket.js
import {db} from "../../Firebase";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";
import { async } from "@firebase/util";


// Actions
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const REMOVE = 'bucket/REMOVE';
const LOADED = "bucket/LOADED";
//프로젝트 이름/리듀서(모듈)/액션 , 액션 타입을 만들어 주는 곳
const initialState = {
    is_loaded: false,
    list: [
        {text: "바다 보며 멍때리기", completed: false},
        {text: "푹 자기", completed: false},
        {text: "산책하기", completed: false},
        {text: "취업하기", completed: false},
    ],
};
//초기값 지정

// Action Creators
export function loadBucket(bucket_list) {
    return { type: LOAD,  bucket_list};
}

export function createBucket(bucket) {
    console.log("나는 액션 생성이야~")
    return { type: CREATE, bucket: bucket };
    //{bucket: bucket} 일 때 {bucket} 으로 줄여 쓸 수 있다.
}

export function updateBucket(bucket_index) {
    return { type: UPDATE, bucket_index };
}

export function removeBucket(bucket_index) {
    console.log("지울 인덱스", bucket_index);
    return { type: REMOVE, bucket_index};
}

export function isLoaded(loaded) {
    return {type: LOADED, loaded};
}

//middlewares
export const loadBucketFB = () => {
    return async function (dispatch) {
        const bucket_data = await getDocs(collection(db, "bucket"));
        console.log(bucket_data);

        let bucket_list = [];
        bucket_data.forEach((bucket) => {
            console.log(bucket.data());
            bucket_list.push({id: bucket.id, ...bucket.data()});
        });

        console.log(bucket_list);

        dispatch(loadBucket(bucket_list));
    }
};

export const addBucketFB = (bucket) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "bucket"), bucket);
        // const _bucket = await getDoc(docRef);
        const bucket_data = {id: docRef.id, ...bucket, is_loaded: true}
        console.log(bucket_data);

        dispatch(createBucket(bucket_data));
    }
};

export const updateBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "bucket", bucket_id);
        await updateDoc(docRef, {completed: true});

        console.log(getState().bucket);
        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((bucket) => {
            return bucket.id === bucket_id;
        })
        dispatch(updateBucket(bucket_index));
    }
}

export const deleteBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        if(!bucket_id) {
            window.alert("아이디가 없네요!🤪");
            return;
        }
        const docRef = doc(db, "bucket", bucket_id);
        await deleteDoc(docRef);

        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((bucket) => {
            return bucket.id === bucket_id;
        });

        dispatch(removeBucket(bucket_index));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    
//변수에 혹시라도 값이 안 들어왔을 때를 대비해 빈 Object로 기본 변수 값 지정
    switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
        return {...state, list: action.bucket_list, is_loaded: true};
    }
    case "bucket/CREATE": {
        console.log("나는 이제 값을 변경할거야~")
        const new_bucket_list = [...state.list, action.bucket];
        return {...state, list: new_bucket_list, is_loaded: true};
    }
    case "bucket/UPDATE": {
        const new_bucket_list = state.list.map((val, idx) => {
           if (parseInt(action.bucket_index) === idx) {
               return {...val, completed: true};
           } else {
               return val;
           }
        })
        console.log({list: new_bucket_list});
        return {...state, list: new_bucket_list};
    }
    case "bucket/REMOVE": {
        // console.log("삭제중이어유");
        const new_bucket_list = state.list.filter((l, idx) => 
        {   
            return parseInt(action.bucket_index) !== idx; 
   
        });
        return {...state, list: new_bucket_list};
    }
    case "bucket/LOADED": {
        return {...state, is_loaded: action.loaded};
    }
    default: 
        return state;
    }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//     return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
//미들웨어: 서버나 외부에서 데이터를 가져올 때 
