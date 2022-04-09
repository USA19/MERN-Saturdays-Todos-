import { useState } from 'react';
import { Container, Typography, TextField, Box, Button } from '@mui/material';
import Todo from "./Todo"
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!edit) {
      setTodos([...todos, task])
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