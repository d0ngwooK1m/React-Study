// import { waitForPendingWrites } from "@firebase/firestore";
import {db} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";

const UPDATE_RANK = "rank/UPDATE_RANK";

export const updateRank = (rank_info) => {
    console.log("랭 킹 조 아");
    return {type: UPDATE_RANK,  rank_info}
};

const initialState = {
    rank_list: [
        { name:"개굴", score:100, comment: "😎"},
        { name:"개골", score: 99, comment: "🙂"},
        { name:"깨굴", score: 98, comment: "🤗"},
        { name:"깨굴", score: 98, comment: "🤗"},
        { name:"깨굴", score: 98, comment: "🤗"},
        { name:"깨굴", score: 98, comment: "🤗"},

    ]
}

export const loadRankingsFB = () => {
    return async function (dispatch) {
        const rank_data = await getDocs(collection(db, "ranking"));
        console.log(rank_data);

        let rank_list = [];
        rank_data.forEach((rank) => {
            console.log(rank.data());
            rank_list.push({...rank.data()});
        })

        console.log(rank_list);

        dispatch(updateRank(rank_list));
    }
};

export default function reducer(state = initialState, action={}) {
    switch (action.type) {
        case "rank/UPDATE_RANK": {
            console.log(action);
            // const new_rank_list = [...state.rank_list, action.rank_info];
            // const new_rank_list = [action.rank_info];
            const new_rank_list = action.rank_info;
            console.log(new_rank_list);
            return {rank_list: new_rank_list};
        }
        default:
            return state;
    }
}