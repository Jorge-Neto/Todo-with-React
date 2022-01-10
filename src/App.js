import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import './App.css';

function App() {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const initialTodos = [
    { id: 1, title: 'Studying React', checked: false },
    { id: 2, title: 'Studying English', checked: true },
    { id: 3, title: 'Play Guitar', checked: false },
    { id: 4, title: 'Learn Python', checked: true },
  ];

  const [todos] = useState(initialTodos);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    console.log(value);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          placeholder="what need to be done?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {
                todos.map((todo) => (
                  <li key={todo.id.toString}>
                    <span className="todo">{todo.title}</span>
                    <button type="button" className="remove">
                      <MdDelete size={28} />
                    </button>
                  </li>

                ))
          }
        </ul>
      </section>
    </section>
  );
}

export default App;
