import { useState } from "react"

const TodoInput = ({ addTodo }) => {

 const [input, setInput] = useState('')
 const [id, setId] = useState(1)

 const addTaskFunc = (e) => {
  e.preventDefault()
  {
   input === ''
   ? alert('Please type a task')
   : addTodo({
    id: id,
    text: input
   }), setInput('')
  }
  setId(id + 1)
 }

 return (
  <div className="my-[50px]">
   <form className="w-full flex items-center justify-between" >
    <input
     type="text"
     placeholder="Type your task here..."
     className="outline-none border-2 border-black px-[15px] py-[10px] min-w-[40vw] rounded-[5px] flex-1"
     value={input}
     onChange={(e) => setInput(e.target.value)}
    />
    <button
     type="submit"
     className="ml-[10px] bg-zinc-800 px-[20px] py-[12px] rounded-[5px] text-white"
     onClick={addTaskFunc}
    >Add Task</button>
   </form>
  </div>
 )
}

export default TodoInput