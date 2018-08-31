let storage = {
  asdf: 'Active'
};
// let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector('ul');
let button = document.querySelector('button');

button.addEventListener('click', () => {
  let li = document.createElement('li');
  let spanEl = document.createElement('span');
  let newTodo = input.value;
  console.log('this is the newTodo:', newTodo);
  if (!checkIfExists(newTodo)) {
    ul.appendChild(li).append(spanEl, newTodo);
    addToList(newTodo);
  } else {
    console.log('Add a new task');
    return;
  }
});

const addToList = val => {
  for (let item in storage) {
    if (item !== val) {
      storage[val] = 'Active';
      console.log('Added to list!');
      return;
    }
  }
  console.log('Already exists!');
  return;
};

const checkIfExists = val => {
  for (let item in storage) {
    val === item.toString() ? true : false;
  }
};
