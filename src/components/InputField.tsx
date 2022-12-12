import React, { useRef } from 'react';
import {Actions} from '../todoReducer';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    dispatch: React.Dispatch<Actions>;
    //handleAdd: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, dispatch}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" 
        onSubmit={(e) => {
            //handleAdd(e);
            e.preventDefault();
            dispatch({
                type: "add",
                task: todo
                });
                setTodo("");
            inputRef.current?.blur();
            }}>
            <input type="input"
            ref={inputRef}
            value={todo}
            onChange={
                (e)=> setTodo(e.target.value)
            }
            placeholder="Enter a task" className="input__box" />
            <button type="submit" className="input__submit">Go</button> 
        </form>
  )
}

export default InputField