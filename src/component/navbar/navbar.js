import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar/navbar.css'

const Navbar = () => {
  return (
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
      <nav id="nav" class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">TLU</a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Quản lý lớp học</a>
                  </li>
            
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Nhập nội dung" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Tìm kiếm</button>
                </form>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

