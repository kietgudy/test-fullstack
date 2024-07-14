import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import axios from "./utils/axios.custom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(res);
    };
    fetchHelloWorld();
  }, []);
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
