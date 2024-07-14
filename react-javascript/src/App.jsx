import axios from "./utils/axios.custom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`)
      console.log(res)
    };
    fetchHelloWorld();
  }, []);
  return <>Hello world</>;
}

export default App;
