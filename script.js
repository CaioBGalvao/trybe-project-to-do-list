// Adiciona tasks ao li
const buttonAddTask = document.getElementById('criar-tarefa');
const buttonDelTaskCompleted = document.getElementById('remover-finalizados');
const buttonDelAll = document.getElementById('apaga-tudo');

// seleciona e pinta uma task de cinza
function clearSelectedOldGray() {
  const allGraysToRemove = document.getElementsByTagName('li');

  for (let index = 0; index < allGraysToRemove.length; index += 1) {
    if (allGraysToRemove[index].classList.contains('selected') === true) {
      allGraysToRemove[index].classList.remove('selected');
    }
  }
}

function grayPrint(clikedLi) {
  clearSelectedOldGray();
  clikedLi.target.classList.add('selected');
}

// cria e risca tasks que foram completadas
function onOffCompleted(event) {
  event.target.classList.toggle('completed');
}

function allInOneButton() {
  const tagParent = document.getElementById('lista-tarefas');
  const theLi = document.createElement('li');
  const input = document.querySelector('#texto-tarefa').value;
  theLi.innerText = input;
  tagParent.appendChild(theLi);
  document.getElementById('texto-tarefa').value = '';
  theLi.addEventListener('click', grayPrint);
  theLi.addEventListener('dblclick', onOffCompleted);
}

buttonAddTask.addEventListener('click', allInOneButton);

// deleta todas as finalizadas
function delFinished() {
  const listWithCompletedTask = document.getElementsByClassName('completed');
  const parentNode = document.getElementById('lista-tarefas');

  for (let index = listWithCompletedTask.length - 1; index >= 0; index -= 1) {
    if (listWithCompletedTask[index].classList.contains('completed') === true) {
      parentNode.removeChild(listWithCompletedTask[index]);
    }
  }
}

buttonDelTaskCompleted.addEventListener('click', delFinished);

// deleta todas as terefas
function delAll() {
  const parentTag = document.getElementById('lista-tarefas');
  parentTag.innerHTML = '';
}

buttonDelAll.addEventListener('click', delAll);
