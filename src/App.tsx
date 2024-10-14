import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/github" element={"https://github.com/johnOfGod33"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
