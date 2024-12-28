import { Routes, Route, Navigate } from "react-router-dom";
import { Work } from "./layouts/01_Work";
import { Education } from "./layouts/02_Education";
import { Resume } from "./layouts/03_Resume";
import { NotFound } from "./layouts/00_NotFound";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/work" />} />
            <Route path='/work' element={<Work />} />
            <Route path='/education' element={<Education />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}