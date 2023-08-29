import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTask,updateTask } from "../features/tasks/taskSlice";
import shortid from "shortid";
import { useNavigate,useParams } from "react-router-dom";

const TaskForm = () => {

  const [task, setTask] = useState({ title: "", description: "" });
  /*
  dispatch permite ejecutar metodos provenientes del slice
  recibe como parametro el payload del action
  */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
   if(params.id){
   setTask(tasks.find(task => task.id === params.id)); 
   }
  },[])


  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if(params.id){
   dispatch(updateTask(task))
  }else{
    dispatch(addTask({...task,id:shortid.generate(),completed:false}));
  }
  navigate('/');

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={task.title}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>

      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
