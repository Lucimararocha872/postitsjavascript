function onCreateNote() {
//Criou o textarea
    const textarea = document.createElement("textarea");
    textarea.focus(); // metodo p colocar o mouse no textarea
  //criando o botao de excluir
    const delButton = document.createElement("button");
    delButton.className = "app-button--ghost app-button--danger";//atribuindo classe ao botao
    delButton.innerText = "Excluir";//mostrando a mensagem excluir no botao
    delButton.addEventListener("click", ()=> note.remove());//inserindo um listener para o evento de clicar ser aplicado ao de deletar nota
    //criando o botao de limpar
    const clearButton = document.createElement("button");
    clearButton.className = "app-button--ghost app-button--warn";//atribuindo classe ao botao de limpar
    clearButton.innerText = "Limpar"; // mostrando a mensagem limpar no botao
    clearButton.addEventListener('click', () => { //adicionando um litener para prestar atenção no evento de clicar para usar em limpar
      if (confirm("Tem certeza que deseja limpar a mensagem?")) {
        textarea.value = '', false
      }
    })//criada condicional para mostrar o alerta, se 
    //criada div para receber os botoes
    const buttons = document.createElement("div");
    buttons.appendChild(delButton);
    buttons.appendChild(clearButton);
    buttons.className = "buttons-area"
    //criada div para ... esse lance de appendchild ainda esta confuso
    const note = document.createElement("div");
    note.className = "app-note";//atribuindo classe a div
    note.appendChild(textarea);//herdando de text area?
    note.appendChild(buttons);// herdando de buttons??
    //
    const app = document.getElementById("app");
    app.appendChild(note);//fazer o id app herdar de note?
      
  }

  function onDeleteNote(event) {
    const button = event.target;
    const note = button.parentElement;
  
    note.remove();
  }


