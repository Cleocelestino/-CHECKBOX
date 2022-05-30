//1- Quando clicar no checkbox TODOS, marcando ele, todos os checkboxs dos compromissos devem ser marcados.
//2- Quando clicar no checkbox TODOS, desmarcando ele, todos os checkboxs dos compromissos devem ser desmarcados.
//3-  Quando clicar no botão SALVAR deve ser informado quantos compromissos estão com os checkboxs marcados.


var todosCheck = document.getElementById("todos");
var salvar = document.getElementById("salvar");
var atividades = document.getElementsByName("atividade");

function verificaMarcadoDesmarcado(){
    if (todosCheck.checked) {
        marcarTodos();
    }
    else{
        desmarcarTodos();
    }
}

function marcarTodos(){
    for (let index = 0; index < atividades.length; index++) {
        const atividade = atividades[index];
        atividade.checked = true
    }
}

function desmarcarTodos(){
    for (let index = 0; index < atividades.length; index++) {
        const atividade = atividades[index];
        atividade.checked = false
    }
}

function clicando() {
    var cont = 0;
    for (let index = 0; index < atividades.length; index++) {
        const atividade = atividades[index];
        if (atividade.checked) {
            cont++;
        }
    }

    alert(cont + " atividades concluídas!");    
}

salvar.onclick = clicando;
todosCheck.onchange = verificaMarcadoDesmarcado;
