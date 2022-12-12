import { Todo } from "./model";

export type Actions = 
{ type: "add"; task: string}
| 
{ type: "remove"; id: number}
| 
{ type: "done"; id: number}
| 
{ type: "edit"; id: number; todoText: string}


export const todosReducer = (state:Todo[], action:Actions): Todo[] => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {id: Date.now(), todo: action.task, isDone: false}
      ];
    case "remove":
      return state.filter((todo: Todo)=>
      todo.id !== action.id);
    case "done":
      return state.map((todo: Todo) =>
        todo.id !== action.id ? {...todo, isDone:!todo.isDone}:todo
      );
    case "edit":
      return state.map((todo)=>
      todo.id === action.id ? {...todo, todo:action.todoText}:todo);
  }
}

