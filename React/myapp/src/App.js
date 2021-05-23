import './App.css';
import Todo from './components/todo';

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false, },
    { id: 2, title: 'make dinner', completed: false, },
  ]

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
