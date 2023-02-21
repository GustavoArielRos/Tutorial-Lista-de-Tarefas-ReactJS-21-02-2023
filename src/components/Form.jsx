/*importando a biblioteca react */

import React from "react";

/*importando uma biblioteca que ja deixa montado as lista certinho*/
import { Button,Paper, TextField } from "@mui/material";

import react, { useState } from "react";

export default function Form({addTodo}) {

    /*criando as variaveis globais */
    const [text, setText] = useState(null);
    const [id,setId] = useState(0);

    const todoCreate = (text) => {
        /*o texto vai ter o valor do texto */
        /*o id vai ter o valor do id*/
        const todoObj = {text: text, id: id};
        /*o próximo id sempre será uma unidade maior que o anterior */
        setId(id + 1);
        addTodo(todoObj);
        /*esvaziando a barra que o usuário escreve a tarefa depois que uma for adicionada */
        document.getElementById("outlined-basic").value = null;

    };

    return (
        <Paper style={{ padding:"1em"}}>
            <div style={{display:"flex", justifyContent: "center"}}>
                {/*"onChange" -> é tipo um "onClick" só que para digitação*/}
                <TextField 
                id="outlined-basic" 
                label="Tarefa" 
                variant="outlined" onChange={(e) => setText(e.target.value)} 
                fullWidth/>
                <Button variant="text" onClick={() => todoCreate(text)}>Add</Button>
            </div>
        </Paper>
    );
}