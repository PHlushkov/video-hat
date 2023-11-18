import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import { useDispatch } from "react-redux";
import List from "./components/List/List";

const URL = "https://api.jsonbin.io/v3/b/6543acbe54105e766fca71e1";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          "X-ACCESS-KEY":
            "$2a$10$9BqSjwnHh/h1uMdFbuthi.gEATjmhsQ.uXU.8pmO3M9r1Okwnum96",
          "X-MASTER-KEY":
            "$2a$10$EKmXKnpO7SXZpxUg0HRwSuh9h1Boqc1jEJjRlepsGi1LKmr.Srs9e",
        },
      })
      .then((data) =>
        dispatch({ type: "GET DATA", payload: data.data.record })
      );
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Input />
        <List />
      </div>
    </div>
  );
}

export default App;
