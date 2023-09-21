import { Route, Routes } from "react-router";
import Example from "./Pages/Example";
import Testing from "./Pages/Testing";
import { Link } from "react-router-dom";
import './Style/styles.scss'
function App() {
  return (
    <>
      <div className="header">
        <Link to=''>Home</Link>
        <Link to='/example'>Example</Link>
        <Link to='/testing'>Testing</Link>
      </div>
      <Routes>
        <Route path="/example" element={<Example />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </>)
}

export default App