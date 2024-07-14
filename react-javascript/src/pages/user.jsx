import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { getUserApi } from "../utils/api";

const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserApi();
      if (res) {
        setDataSource(res);
      }
    };
    fetchUser();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <Table dataSource={dataSource} columns={columns} rowKey={"_id"} bordered />
    </div>
  );
};

export default UserPage;
