import './Task.css';


const Task = (props) => {

  return (
    <li className="task | flex flex-col font-bold bg-white-4 cursor-pointer" style={{ '--gap': '.6em' }}>
      <h3 className="text-black-4">{props.title}</h3>
      <p className="text-gray-3">{props.subtasksDescription}</p>
    </li>
  )
}

export default Task;