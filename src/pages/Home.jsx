
import React from 'react'

/*importando o código feito no "Form.jsx" para cá */
import Form from '../components/Form';
/*importando o código feito no "TodoItem.jsx"*/
/*no caso esse código eu peguei do site https://mui.com/material-ui/react-list/#main-content*/
import TodoItem from '../components/TodoItem';

import { Container, List } from "@mui/material";

import react, { useState } from "react";

export default function Home(){

    /*variável global de lista */
    const [todos, setTodos] = useState([]);

    
    /*criando uma função*/
    /*escrevemos desse jeito pq é um array function */
    /*{} => {}*/
    /* é a mesma coisa que escrever "function todo(todo){
       } , porém é melhor escrever da forma aray function" */
    const addTodo = (todo) => {
      setTodos([...todos, todo]);/*vai pegar todos os valores do array "todos" e adicionar mais um "todo" nele */
    };

    const deleteTodo = (id) => {
      /*vai percorrer o array de objetos e o objeto que não for diferente do "id" será excluído */
      /*essa variável será o novo array sem o id la que foi excluído */
      var filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    }
    

    return(
       
    <Container maxWidth="xs" style={{ marginTop: "1em"}}>
      <Form addTodo={addTodo} />
      <List sx={{   marginTop: "1em" }}>
        {/* isso que cria uma lista no programa */} 
        {/* vai delimitar quantos itens vão ter na lista */} 
        {/*o "map" mapeia dos os itens da lista */}
        {todos.map( (todo, key) => ( 
          <div key={key.id} style ={{ marginTop: "1em"}}>
            <TodoItem  todo={todo} deleteTodo={deleteTodo} />
          </div> 
        ))}
      </List>
      
    </Container>
        
    )
}