// import { createStore } from "redux";
import { configureStore, createSlice, createAction, createReducer } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDo = text => {
//   return {
//     type: ADD,
//     text
//   }
// };
// const deleteToDo = id => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   }
// };

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // case ADD:
//       // return [{ text: action.text, id: Date.now() }, ...state];
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     // case DELETE:
//       // return state.filter(toDo => toDo.id !== action.id);
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   // mutate OK.
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//   state.filter(toDo => toDo.id !== action.payload)
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
})

// const store = createStore(reducer);
// const store = configureStore({ reducer });
// const store = configureStore({ reducer: toDos.reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// }

export const { add, remove } = toDos.actions;

// export default store;
export default configureStore({ reducer: toDos.reducer });


// 2개 이상의 reducer를 사용해야 하는 경우에는
// const allReducer = combineReducers({
// //여기에 관리할 리듀서 다 써주면 됨
// //ex)
// //user,
// //textlist
// })
// const store = configureStore({reducer: allReducer});

// 그리고 데이터가 배열인 경우에는 map으로 꺼낼 때 useSelector로 꺼내온 데이터를 변수로 지정하고 콘솔찍어보면 combineReducers에서 적어놓은 리듀서 이름으로 배열이 만들어져있을거임.
// const data = useSelector(state => state)로 빼왔으면
// data.리듀서이름.map 으로 꺼내면 됨