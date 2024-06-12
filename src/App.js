import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from "./component/modal/modal";
import Item from "./component/Item/Item";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
      });
  }, []);



  const handleAdd = (item) => {
    setTodoList((prev) => [...prev, item]);
  };

  return (
    <div>
      <div id="wrapper">
        <div id="navbar">
          <Navbar />
        </div>

        <div id="title">
          <h4 id="title-tt">Quản lý lớp học</h4>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger"><i class="fas fa-circle"></i> Tất cả</button>
            <button type="button" class="btn btn-success"><i class="fas fa-circle"></i> Hoạt động</button>
            <button type="button" class="btn btn-warning"><i class="fas fa-circle"></i> Không hoạt động</button>
            <button type="button" class="btn btn-success"><i class="fas fa-circle"></i> Đã kết thúc</button>
          </div>

        </div>
        
        <div className="render-data">
          <div className="item-tag">
            <p className="item-label">STT</p>
            <p className="item-label">Tên lớp</p>
            <p className="item-label">Lịch học</p>
            <p className="item-label">Trạng thái</p>
            <p className="item-label">Phòng học</p>
            <p className="item-label">Quản lý</p>
          </div>
          {todoList.map((todo, index) => (
            <Item
              key={index}
              stt={todo.stt}
              name={todo.name}
              schedule={todo.schedule}
              status={todo.status}
              classroom={todo.classroom}
            />
          ))}
        </div>
        
        
        <div>
          <Footer />
        </div>
      </div>
    
      
    </div>
  );
};

export default App;
