import './BoardColumn.css';
import Task from "./Task";


const BoardColumn = ({ title, tasks }) => {

  return (
    <article className="board-column">
      <h2 className="board-column__heading | text-gray-3">{title} ({tasks.length})</h2>

      <ul className="flex flex-col" style={{ '--gap': '1.15rem' }
      } >
        <Task
          title="Build UI for onboarding flow"
          subtasksDescription="0 of 3 substasks"
        />
        <Task
          title="Build UI for search"
          subtasksDescription="0 of 1 substasks"
        />
        <Task
          title="Build settings UI"
          subtasksDescription="0 of 2 substasks"
        />
      </ul >
    </article>
  )
}


export default BoardColumn;