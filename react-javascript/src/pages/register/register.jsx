import React, { useState } from "react";
import { Button, Divider, Form, Input, message, notification } from "antd";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import { createUserApi } from "../../utils/api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, email, password } = values;
    const res = await createUserApi(name, email, password);
    if (res) {
      notification.success({
        message: "created user",
        description: "success",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "create error",
        description: "error",
      });
    }
    console.log(values);
  };

  return (
    <div className="register-page">
      <section className="wrapper">
        <div className="heading">
          <span style={{ fontSize: "25px", color: "#188ee3" }}>
            <SmileOutlined />
          </span>
          <h2 className="text text-large">Đăng Ký Tài Khoản</h2>
          <Divider />
        </div>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Họ tên"
            name="name"
            rules={[{ required: true, message: "Họ tên không được để trống!" }]}
          >
            <Input />
          </Form.Item>

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
              Đăng ký
            </Button>
          </Form.Item>

          <Divider style={{ fontSize: "14px", fontWeight: "400" }}>
            Hoặc
          </Divider>
          <p className="text text-normal">
            Đã có tài khoản?
            <span>
              <Link to="/login"> Đăng Nhập </Link>
            </span>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default RegisterPage;
