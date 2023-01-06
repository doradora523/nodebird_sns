export const initialState = {
  mainPosts: [
    {
      // id, content 는 게시글 자체의 속성이기 때문에 소문자, User,Images,Comments 는 다른정보들과 합쳐서 주기 때문에 대문자
      id: 1,
      User: {
        id: 1,
        nickname: "조수경",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg",
        },
        {
          src: "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg",
        },
        {
          src: "http://image.dongascience.com/Photo/2019/12/43a8a87814b98b5346192ec9855f5883.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "Amanda",
          },
          content: "우와아 고양이다",
        },
      ],
    },
  ],
  ImagePaths: [],
  // 이미지 업로드할 때 이미지의 경로들이 저장됨
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  // 게시글 추가가 완료됬을 때 true
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

// 상수로 액션이름을 빼주면 좋은 점: const 값을 재활용하여 오타가 나는 일을 막을 수 있음
export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});
const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 2,
    nickname: "Amanda",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        // 앞에다 dummyPost를 추가해야 게시글 최상단에 올라감
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
