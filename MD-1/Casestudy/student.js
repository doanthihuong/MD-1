let students = [];
function dangnhap() {
    let username=document.getElementById("username").value
    let password=document.getElementById( "password").value
    if (username == "huong" && password =="123") {
      window.location = "index.html"
    } else {
        alert( "vui lòng nhập đúng usernam và password")
    }
}

function save() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let diachi = document.getElementById("diachi").value;
    let gioitinh = ""
    if (document.getElementById("nam").checked) {
        gioitinh = "Nam"
    } else if (document.getElementById("nu").checked) {
        gioitinh = "Nữ"
    }

    if (fullname == "") {
        document.getElementById("tenloi").innerHTML = 'Họ và tên từ 2-> 50 kí tự!'
    }
    if (email == "") {
        document.getElementById("emailloi").innerHTML = 'Vui lòng nhập gmail!'
    }
    if (phone == "") {
        document.getElementById("phoneloi").innerHTML = 'Vui lòng nhập số điện thoại!'
    }
    if (diachi == "") {
        document.getElementById("diachiloi").innerHTML = 'Vui lòng nhập địa chỉ!'
    }
    if (gioitinh == "") {
        document.getElementById("gioitinhloi").innerHTML = 'Vui lòng chọn giới tính!'
    }
    if (fullname && email && phone && diachi && gioitinh) {
        students.push({
            fullname: fullname, email: email, phone: phone, diachi: diachi, gioitinh: gioitinh
        })
    }
    console.log(students)
    hien()
}

function hien() {
    let tableContent = `<tr>
        <td>STT</td>
        <td>Họ và tên</td>
        <td> Email</td>
        <td>Điện thoại</td>
        <td>Địa chỉ</td>
        <td>Giới tính</td>
        <td>Hoạt động</td>
    </tr>`;
    students.forEach((student, index) => {
        tableContent += `<tr>
       <td>${index}</td>
        <td>${student.fullname}</td>
        <td> ${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.diachi}</td>   
        <td>${student.gioitinh}</td>`;
        tableContent += '<td> <button  style="width: 50px;height:20px" onclick= "sua('+index+')"> Edit</button><button  style="width: 50px; height:20px" onclick="xoa('+index+')">Delete</button></td> </tr>';
    })
    document.getElementById("danhsach").innerHTML = tableContent
}

function xoa(i) {
    students.splice(i, 1);
    hien()
}

function sua(i) {
    alert ( "xin lỗi! hệ thống không khả dụng")
    console.log(i)
}