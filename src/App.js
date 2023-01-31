import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.component";
import Form from "./component/form/form.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Form />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default App;
