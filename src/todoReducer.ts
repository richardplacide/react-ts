import { Todo } from "./model";

export type Actions = 
{ type: "add"; payload: string}
| 
{ type: "remove"; payload: number}
| 
{ type: "done"; payload: number}
| 
{ type: "edit"; payload: number; todoText: string}


export const todosReducer = (state:Todo[], action:Actions): Todo[] => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {id: Date.now(), todo: action.payload, isDone: false}
      ];
    case "remove":
      return state.filter((todo: Todo)=>
      todo.id !== action.payload);
    case "done":
      return state.map((todo: Todo) =>
        todo.id !== action.payload ? {...todo, isDone:!todo.isDone}:todo
      );
    case "edit":
      return state.map((todo)=>
      todo.id === action.payload ? {...todo, todo:action.todoText}:todo);
  }
}

