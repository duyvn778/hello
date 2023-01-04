import logo from "./logo.svg";
import "./App.css";
import { Button, Space } from "antd";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Class10A from "./Class10A";
import Class11A from "./Class11A";
import Class12A from "./Class12A";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom";

//schools chưa được dùng chỗ nào trong code nên nó hiện tối om thê snayf
import { IClass, schools } from "./data";
import { classes } from "./data";
import { students } from "./data";
import { render } from "@testing-library/react";
import { Col, Row } from 'antd';
// const router = createBrowserRouter([
//   {
//     path: "/Class10A",
//     element: <Class10A name="class10" />,
//   },
//   {
//     path: "/Class11A",
//     element: <Class11A name="class11" />,
//   },
//   {
//     path: "/Class12A",
//     element: <Class12A name="class12" />,
//   },
// ]);

function Home() {
  const items: MenuProps["items"] = [
    {
      label: "Quản lý Trường Học",
      key: "quanly",
      icon: <MailOutlined />,
      children: [
        {
          type: "group",
          label: "Trường Đại Học",
          // giờ chỗ này cần thay cái danh sách mặc định này thành danh sách từ chỗ data của schools
          // tương đương với gán lại items[0].children[0].children bằng 1 mảng mới

          // children: [
          //   {
          //     label: "10A",
          //     key: "/Class10A",
          //   },
          //   {
          //     label: "11A",
          //     key: "/Class11A",
          //   },
          //   {
          //     label: "12A",
          //     key: "/Class12A",
          //   },
          // ],
          // hàm map là tương tự như for, nhưng nó sẽ có kết quả là trả về 1 mảng
          // ddaay là bước xử lý data
          // giờ em tìm cách để có thể xử lý được khi chọn code thì hiển thị class tương ứng

          children: schools.map((item) => {
            return {
              label: item.title,
              key: item.code,
            };
          }),
        },
      ],
    },
  ];
  const [addclass, setaddclass] = useState<IClass[]>([]);
  const [update, forceUpdate] = useState();
  const [current, setCurrent] = useState("mail");
  const [newId, setNewId] = useState("");
  const [newClass, setClass] = useState("");
  const [newCode, setNewCoder] = useState("");
  const [newschoolCode, setNewschoolCode] = useState("");
  const [editingRow, seteditingRow] = useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    filterClasses(e.key);
    // filterStudent
    setCurrent(e.key);
  };

  const [dataFilter, setdataFilter] = useState<IClass[]>([]);
  const filterClasses = (code: string) => {
    let result = classes.filter((item) => {
      return item.schoolCode == code;
    });
    setdataFilter(result);
  };
  const onClickAddStu = () => {
    let addclassGo = [...dataFilter];
    addclassGo.push({
      // _Id: newId,
      title: newClass,
      code: newCode,
      schoolCode: newschoolCode,
    });
    setdataFilter(addclassGo);
    setNewId("");
    setClass("");
    setNewCoder("");
    setNewschoolCode("");
    // forceUpdate();
  };
  //update
  const onClickUpStu = () => {
    let i = addclass.findIndex((s) => s.title === editingRow);
    // i>=0
    let addclassGo = [...dataFilter];
    addclassGo[i] = {
      // _Id: newId,
      title: newClass,
      code: newCode,
      schoolCode: newschoolCode,
    };
    setdataFilter(addclassGo);
    // setNewId("");
    setClass("");
    setNewCoder("");
    setNewschoolCode("");
    seteditingRow("");
    // forceUpdate();
  };
  const onPressDeleteRow = (title: string) => {
    let addclassGo = [...dataFilter];
    let i = addclass.findIndex((s) => s.title === title);
    addclassGo.splice(i, 1);
    setdataFilter(addclassGo);
  };
  // const onChangeNewID = (q) => {
  //   setNewId(q.currentTarget.value);
  // };
  const onChangeNewClass = (a: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setClass(a.currentTarget.value);
  };
  const onChangeNewCoder = (a: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setNewCoder(a.currentTarget.value);
  };
  const onChangeNewschoolCode = (a: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setNewschoolCode(a.currentTarget.value);
  };
  const onPressEditingRow = (addclass: IClass) => {
    // setNewId(addclass._Id);
    setClass(addclass.title);
    setNewCoder(addclass.code);
    setNewschoolCode(addclass.schoolCode);
    seteditingRow(addclass.title);
  };

  // const [dataStudent, setdataStudent] = useState("");
  // const filterStudent = (code1: string) => {
  //   let dataFilter = students.filter((item1) => {
  //     return item1.code == code1;
  //   });
  //   setdataFilter(code1);
  // };
  // ReactDOM.render((
  //   <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route path="/Class10A" component={Login} />
  //     <Route path="/explore" component={Explore} />
  //   </Switch>),
  //   document.getElementById('root'))
  // tất cả phần hiển thij đều sẽ nằm bên trong phần return này hết
  //muốn hiển thị schools thì cần cho nó ít nhất là phải nằm vào được bên trong return
  return (
    <div>
      <Menu
        className="Menu"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div>
        <h1>Danh Sách</h1>
      </div>
      <div className="Read"></div>
      <div className="TableRead">
        <div className="Class">Lớp</div>
        <div className="Code">Mã lớp</div>
        <div className="Con">Mã trường</div>
        <div className="Ac"></div>
        <div className="Ac"></div>
      </div>

      {dataFilter.map((s, classes) => {
        return (
          <div className="TableRead" key={classes}>
            <div className="Class" key={s.title}>
              {s.title}
            </div>
            <div className="Code" key={s.code}>
              {s.code}
            </div>
            <div className="Con" key={s.schoolCode}>
              {s.schoolCode}
            </div>
            <div className="Ac">
              <Button type="primary" onClick={(e) => onPressEditingRow(s)}>
                Sửa
              </Button>
            </div>
            <div className="Ac">
              <Button danger onClick={(e) => onPressDeleteRow(s.title)}>
                Xóa
              </Button>
            </div>
          </div>
        );
      })}
      {/* <input
          onChange={onChangeNewID}
          name="Id"
          value={newId}
          disabled={editingRow}
          placeholder="Nhập Id "
        /> */}
      <input
        className="class"
        onChange={onChangeNewClass}
        name="class"
        value={newClass}
        placeholder="Nhập Lớp"
      />

      <input
        className="code"
        onChange={onChangeNewCoder}
        name="Code"
        value={newCode}
        placeholder="Mã Lớp"
      />

      <input
        className="SchoolCode"
        onChange={onChangeNewschoolCode}
        name="schoolCode"
        value={newschoolCode}
        placeholder="Nhập mã trường"
      />
      {editingRow ? (
        <Button type="primary" onClick={onClickUpStu}>
          Cập Nhập
        </Button>
      ) : (
        <Button type="primary" onClick={onClickAddStu}>
          Thêm Mới
        </Button>
      )}
      {/* <div className="Update">
                <button onClick={(e) => onPressEditingRow(classes)}>Sửa</button>
              </div>  */}
      {/* ví duuj hiển thị schools, y hệt như hiển thị ở bản cũ */}
      {/* schools là 1 mảng, item là từng element trong mảng đó */}
      {/* mảng school là 1 mảng của ISchool, ISchool có 2 trường là code và title */}
      {/* nhấn item. nó tự hiển thị ra title và code luôn */}
      {/* {schools.map(item =>{
        return <div>{item.title} {item.code}</div>
      })} 
      {schools.map(item =>(
        //ở đây dùng ngoặc tròn thì ko cần return
        <div>{item.title} {item.code}</div>
      ))}  */}

      {/* {students.map(item =>(
        //ở đây dùng ngoặc tròn thì ko cần return
        <div>{item.title} {item.code} {item.classCode}</div>
      ))}   */}
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}
export default Home;
