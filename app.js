// Global Variables
const ul = document.getElementById('list');
const add = document.getElementById('add');

// Add Task
const addToList = targetUi => {
  let newTask = document.getElementById('text').value;
  let li = document.createElement('li');
  let textNode = document.createTextNode(newTask + '');
  let removeButton = document.createElement('button');
  document.getElementById('text').value = '';

  if (newTask.length === 0) {
    alert('Enter a task');
    return;
  }

  removeButton.innerHTML = 'Completed';
  removeButton.setAttribute('onclick', 'removeMe(this)');

  li.className = 'collection-task';
  li.appendChild(textNode);
  li.appendChild(removeButton);

  targetUi.appendChild(li);
};

add.onclick = () => {
  addToList(ul);
};

// Remove Task
removeMe = item => {
  let parent = item.parentElement;
  parent.parentElement.removeChild(parent);
};

// Toggle
toggleStatus = () => {};

// Remove All Button
const removeAll = document.getElementById('removeAll');
removeAll.onclick = function() {
  ul.innerHTML = '';
};

// Filter List
filterList = () => {
  let list = ul.querySelectorAll('li.collection-task');
  for (let i = 0; i < list.legnth; i++) {
    console.log('hello!!! from a list');
  }
};
