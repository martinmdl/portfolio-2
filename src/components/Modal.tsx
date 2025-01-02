// import { useState } from 'react';
import './Modal.css';

export function Modal({ onClose }: { onClose: () => void }) {
  
  return (
    <aside className="modal" onClick={onClose}>
        <section className="content">s</section>
    </aside>
  )
}