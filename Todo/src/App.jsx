import "./App.css";
import TodoContainer from "./TodoContainer";

function App() {
  return (
    <div className="app">
      <div className="new-title">
        <h1>Your TaskList</h1>
      </div>
      <TodoContainer />
    </div>
  );
}

export default App;
