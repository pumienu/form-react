import React from 'react';
import '../footer/footer.css';

const Footer = () => {
  return (
    <div id='footer'>
      <p id='text-ft'>Hiển thị 5/25 bản ghi</p>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item disabled">
            <a class="page-link">Trước</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item active" aria-current="page">
                <span class="page-link">3</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Sau</a>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Footer
