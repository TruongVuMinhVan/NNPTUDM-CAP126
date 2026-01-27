class Student {
    constructor(ten, ho, tenLot, ngaySinh, danhSachDiem) {
        this.ten = ten;
        this.ho = ho;
        this.tenLot = tenLot;
        this.ngaySinh = new Date(ngaySinh); 
        this.danhSachDiem = danhSachDiem; 
    }

    getFullName() {
        return `${this.ho} ${this.tenLot} ${this.ten}`;
    }

    // Hàm tính trung bình cộng điểm
    tinhTBCDiem() {
        if (this.danhSachDiem.length === 0) return 0;
        const tong = this.danhSachDiem.reduce((sum, diem) => sum + diem, 0);
        return (tong / this.danhSachDiem.length).toFixed(2);
    }

    // Hàm in ra ngày tháng năm sinh
    inNgaySinh() {
        return this.ngaySinh.toLocaleDateString('vi-VN');
    }

    // Hàm tính tuổi
    tinhTuoi() {
        const hienTai = new Date();
        let tuoi = hienTai.getFullYear() - this.ngaySinh.getFullYear();
        const thangHienTai = hienTai.getMonth();
        const ngayHienTai = hienTai.getDate();
        
        // Kiểm tra xem đã qua sinh nhật chưa
        if (thangHienTai < this.ngaySinh.getMonth() || 
            (thangHienTai === this.ngaySinh.getMonth() && ngayHienTai < this.ngaySinh.getDate())) {
            tuoi--;
        }
        return tuoi;
    }

    // Hàm chuyển đổi thành JSON
    toJSON() {
        return {
            ten: this.ten,
            ho: this.ho,
            tenLot: this.tenLot,
            ngaySinh: this.ngaySinh.toISOString(),
            danhSachDiem: this.danhSachDiem,
            fullName: this.getFullName(),
            tbcDiem: this.tinhTBCDiem(),
            ngaySinhFormatted: this.inNgaySinh(),
            tuoi: this.tinhTuoi()
        };
    }
}

// Tạo 3 đối tượng student
const student1 = new Student("An", "Nguyễn", "Văn", "2000-05-15", [8.5, 9.0, 7.5, 8.0, 9.5]);
const student2 = new Student("Linh", "Trần", "Thị", "1999-12-20", [7.0, 8.5, 9.0, 8.5, 7.5]);
const student3 = new Student("Minh", "Lê", "Hoàng", "2001-03-10", [9.0, 9.5, 8.5, 9.0, 8.0]);

// In thông tin các student
console.log("=== THÔNG TIN SINH VIÊN ===");

console.log("\n--- Student 1 ---");
console.log("Họ tên:", student1.getFullName());
console.log("Ngày sinh:", student1.inNgaySinh());
console.log("Tuổi:", student1.tinhTuoi());
console.log("Điểm TBC:", student1.tinhTBCDiem());
console.log("JSON:", JSON.stringify(student1.toJSON(), null, 2));

console.log("\n--- Student 2 ---");
console.log("Họ tên:", student2.getFullName());
console.log("Ngày sinh:", student2.inNgaySinh());
console.log("Tuổi:", student2.tinhTuoi());
console.log("Điểm TBC:", student2.tinhTBCDiem());
console.log("JSON:", JSON.stringify(student2.toJSON(), null, 2));

console.log("\n--- Student 3 ---");
console.log("Họ tên:", student3.getFullName());
console.log("Ngày sinh:", student3.inNgaySinh());
console.log("Tuổi:", student3.tinhTuoi());
console.log("Điểm TBC:", student3.tinhTBCDiem());
console.log("JSON:", JSON.stringify(student3.toJSON(), null, 2));