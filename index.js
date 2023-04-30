function getEleVal(id) {
    return document.getElementById(id).value
}

// bài 1
function baiTap1() {
    var diemChuan = getEleVal('diemChuan') * 1
    var khuVuc = getEleVal('khuVuc')
    var doiTuong = getEleVal('doiTuong')
    var diem1 = getEleVal('diem1') * 1
    var diem2 = getEleVal('diem2') * 1
    var diem3 = getEleVal('diem3') * 1

    var result
    var tongDiem = diem1 + diem2 + diem3
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        result = `<div class='alert alert-danger'>Bạn đã rớt, do có điểm bằng 0</div>`
    } else if (diemChuan < 0 || diemChuan > 30) {
        result = `<div class='alert alert-danger'>Điểm chuẩn nhập vào phải từ 0 đến 30</div>`
    }
    else {
        switch (khuVuc) {
            case 'A':
                tongDiem += 2
                break
            case 'B':
                tongDiem += 1
                break
            case 'C':
                tongDiem += 0.5
                break
        }
        switch (doiTuong) {
            case '1':
                tongDiem += 2.5
                break
            case '2':
                tongDiem += 1.5
                break
            case '3':
                tongDiem += 1
                break
        }

        if (diemChuan <= tongDiem) {
            result = `<div class='alert alert-success'>Bạn đã đậu, Tổng điểm là ${tongDiem}</div>`
        } else {
            result = `<div class='alert alert-danger'>Bạn đã rớt, Tổng điểm là ${tongDiem}</div>`
        }
    }
    document.getElementById('b1Result').innerHTML = result


}


// bài 2

function baiTap2() {
    var name = getEleVal('b2HoVaTen')
    var soDien = getEleVal('b2SoDien') * 1
    var tienDien = 0
    var result
    if (soDien <= 0) {
        alert('Số điện không hợp lệ!')
    } else if (soDien <= 50) {
        tienDien = soDien * 500
    } else if (soDien <= 100) {
        tienDien = 500 * 50 + (soDien - 50) * 650
    } else if (soDien <= 200) {
        tienDien = 500 * 50 + 50 * 650 + (soDien - 100) * 850
    } else if (soDien <= 350) {
        tienDien = 500 * 50 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100
    } else {
        console.log('ok')
        tienDien = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300
    }
    var result = `<div class='alert alert-success'>Họ tên: ${name}, Tiền điện: ${new Intl.NumberFormat("de-DE").format(tienDien)} đ</div>`
    document.getElementById('b2Result').innerHTML = result
}


function baiTap3() {
    var name = getEleVal('b3HoVaTen')
    var thuNhap = getEleVal('b3ThuNhap') * 1
    var phuThuoc = getEleVal('b3PhuThuoc') * 1
    var thuNhapChiuThue = thuNhap - 4000000 - phuThuoc * 1600000
    var taxRate = 0
    var thuNhapChiuThue1 = thuNhapChiuThue / 1000000
    switch (true) {
        case (thuNhapChiuThue1 <= 60):
            taxRate = 0.05
            break;
        case (thuNhapChiuThue1 <= 120):
            taxRate = 0.1
            break;
        case (thuNhapChiuThue1 <= 210):
            taxRate = 0.15
            break;
        case (thuNhapChiuThue1 <= 384):
            taxRate = 0.2
            break;
        case (thuNhapChiuThue1 <= 624):
            taxRate = 0.25
            break;
        case (thuNhapChiuThue1 <= 960):
            taxRate = 0.3
            break;
        default:
            taxRate = 0.35
    }
    var thueThuNhap = thuNhapChiuThue * taxRate
    var result = `<div class='alert alert-success'>Họ tên: ${name}, Thu nhập chịu thuế: ${new Intl.NumberFormat("de-DE").format(thuNhapChiuThue)} đ,Mức đóng thuế: ${taxRate * 100}%,Tiền thuế thu nhập: ${new Intl.NumberFormat("de-DE").format(thueThuNhap)} đ</div>`
    document.getElementById('b3Result').innerHTML = result
}

// Bài 4

function changeInput() {
    var loaiKhach = getEleVal('b4Loai')
    if (loaiKhach == 2) {
        document.getElementById('inputKetNoi').innerHTML = `
        <input id="b4KetNoi" type="number" class="form-control" placeholder="Nhập số kết nối" />
        `
    } else {
        document.getElementById('inputKetNoi').innerHTML = ``
    }
}

function baiTap4() {
    var loaiKhach = getEleVal('b4Loai')
    var maKhach = getEleVal('b4MaKhach')
    var soKenh = getEleVal('b4SoKenh')
    var phiXuLy = 0
    var phiDichVu = 0
    var thueKenh = 0
    if (loaiKhach == '') {
        alert('Chọn loại khách!')
        return 'ok'
    } else if (loaiKhach == '1') {
        phiXuLy = 4.5
        phiDichVu = 20.5
        thueKenh = 7.5 * soKenh
        console.log('1111');
    } else {
        var delta = 0
        var ketNoi = getEleVal('b4KetNoi') * 1
        if (ketNoi <= 10) {
            delta = 0
        } else {
            delta = ketNoi - 10
        }
        phiXuLy = 15
        phiDichVu = 75 + delta * 5
        thueKenh = 7.5 * soKenh
    }
    var tienCap=phiXuLy+phiDichVu+thueKenh

    var result = `<div class='alert alert-success'>Mã khách: ${maKhach}, Tiền cáp: $${new Intl.NumberFormat("de-DE").format(tienCap)} </div>`
    document.getElementById('b4Result').innerHTML = result
}