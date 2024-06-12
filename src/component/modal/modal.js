import React, { useState } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../modal/modal.css';

const Modal = ({ open, setOpen, onAdd }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [item, setItem] = useState({}); 

  const handleChange = (key, value) => {
    setItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (data) => {
    onAdd(item); 
    setOpen(false); 
    reset();
  };

  const handleCloseModal = () => {
    setOpen(false); 
  };



  return (
    <div>
      {/* Modal */}
      <div id="modal" className={open ? "modal-open" : "modal-closed"}>
        <div id="modal_overlay" onClick={handleCloseModal}>
          <div id="modal_body" onClick={(e) => e.stopPropagation()}>
            <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
              <div id="modal-body-header">
                <h3>Thay đổi thông tin lớp học</h3>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body-item">
                <div className="body-item">
                  <label>Tên lớp</label>
                  <input name="name" type="text" id="add-input" {...register("name", { required: true, maxLength: 50})} />
                  {errors.name && errors.name.type === "required" && <label className="error">Xin hãy nhập thông tin </label>}
                  {errors.name && errors.name.type === "maxLength" && <label className="error">Tối đa 50 kí tự</label>}
                </div>
                <div className="body-item">
                  <label>Lịch học</label>
                  <input name="schedule" type="text" id="add-input" {...register("schedule", { required: true })} />
                  {errors.schedule && errors.schedule.type === "required" && <label className="error">Xin hãy nhập thông tin</label>}
                </div>

                <div>
                <div className="body-item">
                <label>Trạng thái</label>
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-success"><i class="fas fa-circle"></i> Hoạt động</button>
                    <button type="button" class="btn btn-warning"><i class="fas fa-circle"></i> Không hoạt động</button>
                    <button type="button" class="btn btn-success"><i class="fas fa-circle"></i> Đã kết thúc</button>
                  </div>
                </div>
                </div>

                <div className="body-item">
                  <label>Phòng học</label>
                  <input name="classroom" type="text" id="add-input" {...register("classroom", { required: true })} />
                  {errors.classroom && errors.classroom.type === "required" && <label className="error">Xin hãy nhập thông tin</label>}
                </div>
              </div>
              <div id="footer">
                <button type="reset" className="btn btn-light">Hủy</button>
                <button type="submit" className="btn btn-secondary">Lưu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Modal;
