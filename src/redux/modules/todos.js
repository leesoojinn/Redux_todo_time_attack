// import uuid from "react-uuid";
import shortid from "shortid";

const initailState = [
  {
    id: shortid.generate(),
    title: "리액트1",
    body: "리액트 배우기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트2",
    body: "리액트 배우기",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트3",
    body: "리액트 배우기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트4",
    body: "리액트 배우기",
    isDone: true,
  },
];

// combinReducer에 들어갈 todos 만들기
// reducer에는 두 가지 input을 갖게 된다 => state, action(어떤 처리를 할 것이냐)
// output는 새로운 store를 내보낸다.
// state = initailState => 초기값 부여
// action => type, payload 반드시 이 두 가지를 가진다.
// type을 payload만큼 처리해줘
const todos = (state = initailState, action) => {
  // 여기서 return하는 값들은 새롭게 만들 state이여야한다.
  switch (action.type) {
    // ADD_TODO를 받으려면 새로운 객체가 필요. -> 새로운 todolist 갱신.
    // 먼저 원래 가지고 있던 state를 펼치고,
    // 새롭게 받아온 action에 payload를 넣어준다. -> 새로운 객체의 todo
    case "ADD_TODO":
      return [...state, action.payload];

    // 삭제 버튼은 눌렀을 때 payload로서 제공할 수 있다?
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    // 만약에 todo.id가 action에 있는 payload와 동일한다면
    // 원래 있던 객체의 isDone 상태를 반대로 바꿔준다.
    // 원래 있던 todo를 펼쳐주고, isDone의 속성을 반대로 바꿔준다.
    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    // 위에 해당하지 않으면 그냥 state로 return
    default:
      return state;
  }
};
// 내보내준다.
export default todos;
