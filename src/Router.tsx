import { Routes, Route } from "react-router-dom";
import { Work } from "./layouts/01_Work";
import { Education } from "./layouts/02_Education";
import { About } from "./layouts/03_About";
import { Resume } from "./layouts/04_Resume";
import { NotFound } from "./layouts/00_NotFound";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Work />} />
            <Route path='/edu' element={<Education />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}