import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import UserListDisplay from "./components/UserListDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserListDisplay />
    </div>
  );
}

export default App;
