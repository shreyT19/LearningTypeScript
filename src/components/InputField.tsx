import React from 'react'
import './Styles.css'
import { Todo } from '../model'
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAddTodos:(e:React.FormEvent)=>void;
    
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAddTodos}) => {
  return (
    <form className='input'> 
        <input 
            type="input" 
            placeholder='Enter task' 
            className='input__box'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            
        />
        <button 
            className='input_submit' 
             type='submit'
             onClick={handleAddTodos}
        >Add task</button>
    </form>
  )
}

export default InputField