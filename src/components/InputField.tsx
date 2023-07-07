import React, { useRef } from 'react'
import './Styles.css'
import { Todo } from '../model'
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAddTodos:(e:React.FormEvent)=>void;
    
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAddTodos}) => {
    //setting the current state
    const refContainer = useRef<HTMLInputElement>(null);

  return (
    <form className='input'

         onSubmit={(e)=>{
             handleAddTodos(e);
             refContainer.current?.blur();            
         }
        }> 
        <input
            ref={refContainer} 
            type="input" 
            placeholder='Enter task' 
            className='input__box'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}

        />
        <button 
            className='input_submit' 
             type='submit'
        >Add task</button>
    </form>
  )
}

export default InputField