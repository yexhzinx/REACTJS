import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

import About from "./06ROUTE/About"
import Home from "./06ROUTE/Home"
import Contact from './06ROUTE/Contact';

function App() {

  return (
    <div className="App">
      <h1>컴포넌트 간 통신</h1>
      
      {/* 부모 -> 자식 전달(props) */}
      <ParentComponent_01 />
      <hr/>
      {/* 부모 <- 자식 전달(callback) */}
      
      {/* 컴포넌트간의 데이터 공유 - ContextAPI */}

    </div>
  );
}

export default App;
