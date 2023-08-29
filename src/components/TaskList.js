import { useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div>

    <header>
        <h1>Task {tasks.length} </h1>
       <Link to='/create-task' >Create Task</Link>
    </header>

      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3> {task.title} </h3>
            <p> {task.description} </p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit-task/${task.id}`} >Edit</Link>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
