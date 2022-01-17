import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div key={task.id} className="task">
      <h5>{task.text}</h5>
      <FaTimes
        style={{ float: "right", color: "red", cursor: "pointer" }}
        onClick={() => onDelete(task.id)}
      />
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
