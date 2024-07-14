import React, { useState } from "react";
import { Button, Divider, Form, Input, message, notification } from "antd";
import "./login.css";
import { SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LoginPage = () => {


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
          style={{ maxWidth: 600 }}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="username"
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
