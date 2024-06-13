import './App.css';
import {React, useEffect, useState} from 'react' 
import axios from 'axios';
import dqdStudentList from './components/DqdStudentList';

function App() {

  const [dqdStudentList, setdqdStudentList]=useState([]);
  const dqdGetStudent = async () => {
    try {
      const response = await axios.get("https://666a67987013419182cf2754.mockapi.io/dat/v1");
      setdqdStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    dqdGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">Xử lý chức năng hook </h1>
      <hr/>
      <dqdStudentList renderdqdStudentList = {dqdStudentList}/>
    </div>
  );
}

export default App;
