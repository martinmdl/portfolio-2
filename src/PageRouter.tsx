import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./layouts/00_NotFound";
import { Work } from "./layouts/01_Work";
import { Education } from "./layouts/02_Education";
import { About } from "./layouts/03_About";
import { Resume } from "./layouts/04_Resume";

export function PageRouter() {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Work />} />
                <Route path='/edu' element={<Education />} />
                <Route path='/about' element={<About />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    )
}