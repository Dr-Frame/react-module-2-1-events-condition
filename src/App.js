import React from 'react';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
/* import TodoList from "./components/TodoList"; */
/* import initialTodos from './todos.json'; */

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <React.Fragment>
      <h1>The condition of component</h1>
      {/* <Counter initialValue={15} /> */}
      {/* <Dropdown /> */}

      <ColorPicker options={colorPickerOptions} />
    </React.Fragment>
  );
};

export default App;
