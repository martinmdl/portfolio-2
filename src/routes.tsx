import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./layouts/Home";
import { Work } from "./layouts/Work";
import { NotFound } from "./layouts/NotFound";


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