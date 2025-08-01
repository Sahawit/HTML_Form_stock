document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('stockForm');
    const tableBody = document.querySelector('#stockTable tbody');
    let count = 0; // ตัวแปรสำหรับนับลำดับสินค้า

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // ป้องกันการโหลดหน้าซ้ำเมื่อกด submit

        // ดึงค่าจากฟอร์ม
        const product = document.getElementById('productName').value;
        const color = document.getElementById('color').value;
        const size = document.getElementById('size').value;
        const imageInput = document.getElementById('image');
        const price = document.getElementById('price').value;

        // ตรวจสอบข้อมูลว่ากรอกครบถ้วนหรือไม่
        if (!product || !color || !size || !imageInput.files[0] || !price) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return; // หยุดการทำงานถ้าข้อมูลไม่ครบ
        }

        count++; // เพิ่มลำดับสินค้า

        // สร้าง URL สำหรับรูปภาพที่เลือก
        const imageURL = URL.createObjectURL(imageInput.files[0]);

        // สร้างแถวใหม่ในตาราง
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${count}</td>
            <td>${product}</td>
            <td>${color}</td>
            <td>${size}</td>
            <td><img src="${imageURL}" alt="รูปสินค้า" /></td>
            <td>${price} บาท</td>
        `;

        // เพิ่มแถวใหม่เข้าไปใน tbody ของตาราง
        tableBody.appendChild(row);

        // รีเซ็ตฟอร์มหลังจากเพิ่มข้อมูลแล้ว
        form.reset();

    });
});