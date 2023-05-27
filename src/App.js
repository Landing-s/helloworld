import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./components/layout";
import ToDo from "./components/to-do";
import Home from "./components/home";
import Fetch from "./components/fetch";
import FavoriteColor from "./components/favorite_color";
import Form from "./components/form";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout></Layout>}>
          <Route index element = {<Home/>}></Route>
          <Route path = "/todo" element = {<ToDo/>}></Route>
          <Route path = "*" element = {<Home/>}></Route>
          <Route path = "/fetch" element = {<Fetch/>}></Route>
          <Route path = "/favorite_color" element = {<FavoriteColor/>}></Route>
          <Route path = "/form" element = {<React/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
