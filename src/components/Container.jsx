import { TiTick } from "react-icons/ti";
import TodoInput from "./TodoInput";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Container = () => {

 // Effect to retrieve data from local storage on mount
 const storedTasks = JSON.parse(localStorage.getItem('allTasks'));

 const [todo, setTodo] = useState(storedTasks || [])

 const addTodo = (newTodo) => {
  const newTodos = [...todo, newTodo]
  setTodo(newTodos)
 }

 const deleteTodo = (taskId) => {
  const updatedTodo = todo.filter((task) => task.id !== taskId)

  setTodo(updatedTodo)
 }

 useEffect(() => {
  localStorage.setItem('allTasks', JSON.stringify(todo));
 }, [todo]);

 return (
  <div className="bg-white mx-auto max-w-[90vw] min-h-[90vh] rounded-[20px] p-[30px]">
   <div className="flex items-center">
    <TiTick className="text-[40px] border-[5px] border-black rounded-full mr-[10px]" />
    <h1 className="font-[600] text-[40px] text-black">Get Stuff Done...</h1>
   </div>
   <TodoInput addTodo={addTodo} />
   {todo.map((task, index) => (
    <TodoList task={task} key={index} deleteTodo={deleteTodo} />
   ))}
  </div>
 )
}

export default Container