import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Work } from "./components/Work";


export function PageRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </Router>
    )
}