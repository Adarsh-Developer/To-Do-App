import { FaRegCircle } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const TodoList = ({ task, deleteTodo }) => {

  const [doneTask, setDoneTask] = useState(false)
  
  return (
    <div className="w-full border-2 border-[#222] px-[15px] py-[10px] rounded-[10px] mt-[10px] flex items-center justify-between">
      <div className="flex items-center">
      {doneTask
          ? (<IoIosCheckmarkCircle
            className="text-[#222] text-[28px] mr-[10px] cursor-pointer"
            onClick={() => setDoneTask(!doneTask)}
          />)
          : (<FaRegCircle
            className="text-[#222] text-[28px] mr-[10px] cursor-pointer"
            onClick={() => setDoneTask(!doneTask)}
          />)
        }
        <p className={`text-[24px] relative after:ease-linear after:duration-300 after:h-[2px] after:bg-[#555] after:top-1/2 after:-left-[2px] after:-translate-y-[50%] after:absolute ${doneTask ? 'text-[#555] after__line' : 'text-[#222] after:w-[0%]'}`} >{task.text}</p>
      </div>
      <div className="flex items-center">
        <RiDeleteBinLine
          className="text-[26px] text-[#222] cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  )
}

export default TodoList