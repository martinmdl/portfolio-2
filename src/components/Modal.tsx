import { useState } from 'react';
import './Modal.css';

export function Modal() {

  const [isActive, setIsActive] = useState(true);

  function closeModal() {
    setIsActive(!isActive);
  }
  
  return (
    <>
      {isActive && (
        <aside className="modal">
            <section className="close-space" onClick={closeModal}></section>
            <section className="content">s</section>
        </aside>
      )}
    </>
  )
}