import Main from "./Main";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </>
  );
}
