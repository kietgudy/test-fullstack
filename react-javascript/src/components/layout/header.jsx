import React, { Fragment, useState } from "react";
import { HomeOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home Page</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"user"}>Users</Link>,
      key: "users",
      icon: <TeamOutlined />,
    },
    {
      label: "Setting",
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"login"}>Login</Link>,
          key: "login",
        },
        {
          label: (
            <span
              onClick={() => {
                localStorage.clear("access_token");
                navigate("/");
                // setCurrent("home");
              }}
            >
              Logout
            </span>
          ),
          key: "logout",
        },
      ],
    },
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};
export default Header;
