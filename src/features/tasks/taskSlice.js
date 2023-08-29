import { createSlice } from "@reduxjs/toolkit";

const initialStateArray = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

/*
contiene un estado inicial (initialState) y multiples funciones
que permiten modificar ese estado inicial (reducers)
*/
export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialStateArray,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);

      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);

      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
