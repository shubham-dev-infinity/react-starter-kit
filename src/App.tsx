import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import './styles/styles.scss'
import Example from "pages/example";
import Testing from "pages/testing";
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