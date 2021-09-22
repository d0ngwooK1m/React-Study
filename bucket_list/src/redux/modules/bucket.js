// bucket.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'bucket/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'bucket/REMOVE';
//프로젝트 이름/리듀서(모듈)/액션 , 액션 타입을 만들어 주는 곳
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};
//초기값 지정

// Action Creators
// export function loadWidgets() {
//     return { type: LOAD };
// }

export function createBucket(bucket) {
    console.log("나는 액션 생성이야~")
    return { type: CREATE, bucket: bucket };
    //{bucket: bucket} 일 때 {bucket} 으로 줄여 쓸 수 있다.
}

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

export function removeBucket(bucket_index) {
    console.log("지울 인덱스", bucket_index);
    return { type: REMOVE, bucket_index};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    
//변수에 혹시라도 값이 안 들어왔을 때를 대비해 빈 Object로 기본 변수 값 지정
    switch (action.type) {
    // do reducer stuff
    case "bucket/CREATE": {
        console.log("나는 이제 값을 변경할거야~")
        const new_bucket_list = [...state.list, action.bucket];
        return {list: new_bucket_list};
    }
    case "bucket/REMOVE": {
        const new_bucket_list = state.list.filter((l, idx) => 
        {
            return parseInt(action.bucket_index) !== idx;    
        });
        return {list: new_bucket_list};
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