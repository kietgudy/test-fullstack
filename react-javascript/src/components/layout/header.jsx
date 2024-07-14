import React, { Fragment, useContext, useState } from "react";
import { HomeOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
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
    ...(auth.isAuthenticated
      ? [
          {
            label: <Link to={"user"}>Users</Link>,
            key: "users",
            icon: <TeamOutlined />,
          },
        ]
      : []),

    {
      label: `Welcome ${auth?.user?.name}`,
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        ...(auth.isAuthenticated
          ? [
              {
                label: (
                  <span
                    onClick={() => {
                      localStorage.clear("access_token");
                      setAuth({
                        isAuthenticated: false,
                        user: {
                          email: "",
                          name: "",
                        },
                      });
                      navigate("/");
                      // setCurrent("home");
                    }}
                  >
                    Logout
                  </span>
                ),
                key: "logout",
              },
            ]
          : [
              {
                label: <Link to={"login"}>Login</Link>,
                key: "login",
              },
            ]),
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
