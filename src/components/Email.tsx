import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

import './Email.css';

export function Email(props: { emailCopy: string, centered: boolean }) {

    /**** COPY TEXT ****/
    const [showAlert, setShowAlert] = useState(false);    
    async function handleCopy() {
        try {
            await navigator.clipboard.writeText("martinmdl42@gmail.com");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 1000);
        } catch (err) {
            console.log("Failed to copy text:", err);
        }
    }
    
    return (
        <p className={`paragraph ${props.centered ? "ending" : ""}`}><MdEmail className="icon"/> Email: <b>martinmdl42@gmail.com</b> <FaRegCopy className="copy-button icon" onClick={handleCopy}/> {showAlert && <span className="copy-alert">{props.emailCopy}</span>}</p>
    )
}