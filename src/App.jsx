import React,{useState} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Read from "./components/Read";
import Adduser from "./components/Adduser";
import Content from "./components/Content";
import axios from "axios";
import { loader as contentsloader } from "./components/Content";
import Edituser from "./components/Edituser"
import Deleteuser from "./components/Deleteuser";

// Define your loader function to fetch data
export async function todosLoader() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return { todos: response.data };
}

const App = () => {
  const [todos, setTodos] = useState([]);

 
  const updateUserList = (newUser) => {
    setTodos([...todos, newUser]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Read />,
      loader: todosLoader
    },
    {
      path: "/add",
      element: <Adduser updateUserList={updateUserList}/>
    },
    {
      path: "/users/:id",
      element: <Content />,
      loader:contentsloader
    },
    {
      path: "/edit",
      element: <Edituser />
    },
    {
      path: "/delete",
      element: <Deleteuser />
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
};

export default App;
