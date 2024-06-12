import React, { useState } from "react";
import '../Item/Item.css'
import Modal from "../modal/modal";
import '../fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css'


const Item = ({stt, name, schedule, classroom, status}) => {
  const [todoList, setTodoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAdd = (item) => {
    setTodoList((prev) => [...prev, item]);
  };
  return (

    <div className="item-container">
      <div className="item-section">
        <p>{stt}</p>
      </div>

      <div className="item-section">
        <p>{name}</p>
      </div>

      <div className="item-section">
        <p>{schedule}</p>
      </div>

      <div className="item-section item-status">
        <p id="item-status">{status}</p>
      </div>

      <div className="item-section">
        <p>{classroom}</p>
      </div>

      <div className="item-icon">
        <span>
          <i class="fa-solid fa-gear" onClick={() => setModalOpen(true)}></i>
          <i class="fas fa-circle-xmark"></i>
        </span>
      </div>

      <Modal open={modalOpen} 
        setOpen={setModalOpen}
        onAdd={(item) => handleAdd(item)}
      />
    </div>
  );
};

export default Item;
