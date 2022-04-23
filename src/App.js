import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Box, Button } from '@mui/material';
import axios from "axios";
import Todo from "./Todo";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  const fetchTodo = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/todo");
      setTodos(data.data);
    }

    catch (error) {
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    fetchTodo()
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!edit) {
      //request to server
      const newTodo = {
        name: task,
        id: Math.random()
      }

      const { data } = await axios.post("http://localhost:3001/todo", newTodo);
      console.log(">>>>>>>data", data.data);

      setTodos([...todos, newTodo])
    } else {
      let newTodos = []
      //find which task i need to update
      for (let index in todos) {
        if (index === edit) {

          newTodos.push(task)
        } else {
          newTodos.push(todos[parseInt(index)])
        }
      }
      setTodos(newTodos)
      // update the list
    }
    setEdit("")
    setTask("")
  }

  return (
    <Container maxWidth="sm">
      <Typography variant='h5' color="blur">
        DevWeekends Mern Saturdays Series
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box my={2}>
          <TextField
            variant="outlined"
            value={task}
            onChange={handleTaskChange}
            fullWidth
            label="I will do"
          />
        </Box>

        <Button color="secondary" variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>

      {todos.map((todo, index) => (
        <Todo todos={todos} setTodos={setTodos} todo={todo} task={task} setTask={setTask} setEdit={setEdit} index={index} />
      ))}

    </Container>
  );
}

export default App;