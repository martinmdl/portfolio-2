import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { NotFound } from "./components/NotFound";


export function PageRouter() {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </Router>
    )
}