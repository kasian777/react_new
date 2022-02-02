
import './App.css';
import {useState} from "react";
import Form from "./Components/Form/Form";
import Cars from "./Components/Cars/Cars";

function App() {
    const [cars, setCars] = useState([]);
    const getFormData = (data) => {
setCars([...cars,{id:new Date().getTime(), ...data}])
    }
    const getCarId = (id) => {
      setCars(cars.filter(car=>car.id!=id))
    }
  return (
    <div>
     <Form getFormData={getFormData}/>
        <Cars cars={cars} getCarId={getCarId}/>
    </div>
  );
}

export default App;
