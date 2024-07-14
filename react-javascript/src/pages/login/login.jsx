import React, { useContext, useState } from "react";
import { Button, Divider, Form, Input, message, notification } from "antd";
import "./login.css";
import { SmileOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../utils/api";
import { AuthContext } from "../../context/auth.context";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const onFinish = async (values) => {
    const { email, password } = values;
    const res = await loginApi(email, password);
    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "login user",
        description: "success",
      });
      setAuth({
        isAuthenticated: true,
        user: {
          email: res?.user?.email ?? "",
          name: res?.user?.name ?? "",
        },
      });
      navigate("/");
    } else {
      notification.error({
        message: "login error",
        description: res?.EM ?? "error",
      });
    }
  };

  return (
    <div className="register-page">
      <section className="wrapper">
        <div className="heading">
          <span style={{ fontSize: "25px", color: "#188ee3" }}>
            <SmileOutlined />
          </span>
          <h2 className="text text-large">Đăng Nhập Tài Khoản</h2>
          <Divider />
        </div>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email không được để trống!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Mật khẩu không được để trống!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
          <Divider style={{ fontSize: "14px", fontWeight: "400" }}>
            Hoặc
          </Divider>
          <p className="text text-normal">
            Chưa có tài khoản?
            <span>
              <Link to="/register"> Đăng Ký </Link>
            </span>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default LoginPage;
