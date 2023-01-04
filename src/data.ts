export interface ISchool {
  code: string;
  title: string;
}
export interface IClass {
  code: string;
  title: string;
  schoolCode: string;
}
export interface IStudent {
  code: string;
  title: string;
  classCode: string;
}
export const schools: ISchool[] = [
  {
    code: "0001",
    title: "ĐH Bách Khoa",
  },
  {
    code: "0002",
    title: "PTIT",
  },
  {
    code: "0003",
    title: "Học viện Ngân Hàng",
  },
  {
    code: "0004",
    title: "Aptech",
  },
];

export const classes: IClass[] = [
  {
    code: "CL001",
    title: "Tự động hóa",
    schoolCode: "0001",
  },
  {
    code: "CL002",
    title: "CNTT",
    schoolCode: "0001",
  },
  {
    code: "CL003",
    title: "Vi xử lý",
    schoolCode: "0001",
  },
  {
    code: "CL004",
    title: "Vẽ kỹ thuật",
    schoolCode: "0001",
  },
  {
    code: "CL005",
    title: "Điện tử viễn thông",
    schoolCode: "0001",
  },
  {
    code: "CL006",
    title: "Cấu trúc dữ liệu và giải thuật",
    schoolCode: "0002",
  },
  {
    code: "CL007",
    title: "Hệ điều hành",
    schoolCode: "0002",
  },
  {
    code: "CL008",
    title: "Mạng máy tính",
    schoolCode: "0002",
  },
  {
    code: "CL009",
    title: "Toán cao cấp 1",
    schoolCode: "0002",
  },
  {
    code: "CL010",
    title: "Kinh tế vi mô",
    schoolCode: "0003",
  },
  {
    code: "CL011",
    title: "Kinh tế vĩ mô",
    schoolCode: "0003",
  },
  {
    code: "CL012",
    title: "Kinh tế lượng",
    schoolCode: "0003",
  },
  {
    code: "CL013",
    title: "Xác suất thống kê",
    schoolCode: "0003",
  },
  {
    code: "CL014",
    title: "C#",
    schoolCode: "0004",
  },
  {
    code: "CL0015",
    title: "Thiết kế web",
    schoolCode: "0004",
  },
];
export const students: IStudent[] = [
  {
    code: "20230001",
    title: "Ngô Bá Nghĩa",
    classCode: "CL001",
  },
  {
    code: "20230002",
    title: "Đinh Tuấn Khá",
    classCode: "CL001",
  },
  {
    code: "20230003",
    title: "Trần Văn Chờ",
    classCode: "CL002",
  },
];
