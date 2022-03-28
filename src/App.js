import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
      <div className="container"></div>
      <div className="zindex">
        <UserCard />
      </div>
    </div>
  );
}

export default App;
