import { HYDRATE } from "next-redux-wrapper";
// 리덕스 서버사이드 렌더링을 위해서 HYDRATE 를 넣어줌 (index Reducer)
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const initialState = {
  user: {},
  post: {},
};

// async action creator

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  // combinReducers : reducers 를 합쳐주는 역할
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
