import React from 'react'
import { Box, IconButton } from '@mui/material';
import { DeleteForever, Edit } from '@mui/icons-material';

const Todo = ({ todo, task, setTask, setEdit, index, setTodos, todos }) => {

  const handleEdit = () => {
    setEdit(index.toString())
    setTask(todo)
  }

  const handleDelete = () => {
    let newTodos = []
    //find which task i need to update
    debugger;
    for (let todoIndex in todos) {

      if (parseInt(todoIndex) !== index) {
        newTodos.push(todos[parseInt(todoIndex)])
      }
    }
    setTodos(newTodos)

    // update the list
  }


  return (
    <Box display="flex" alignItems="center" mt={2} justifyContent="space-between" p={2} borderRadius={4} style={{ background: 'blue' }} color="white">
      <Box>
        {todo.name}
      </Box>
      <Box color="white">
        <IconButton onClick={handleEdit}>
          <Edit color="inherit" />
        </IconButton>

        <IconButton onClick={handleDelete}>
          <DeleteForever color="inherit" />
        </IconButton>
      </Box>
    </Box>
  )
}


export default Todo
