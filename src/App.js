import {useState} from "react";

import './App.css';
import FormCat from "./Components/FormCat/FormCat";
import Cats from "./Components/Cats/Cats";
import FormDog from "./Components/FormDog/FormDog";
import Dogs from "./Components/Dogs/Dogs";

function App() {

    const [cats, setCats] = useState([]);
    const getFormDataCat = (data) => {
        setCats([...cats,{id:new Date().getTime(), ...data}])
    }
    const getCatId = (id) => {
        setCats(cats.filter(cat=>cat.id!==id))
    }


    const [dogs, setDogs] = useState([]);
    const getFormDataDog = (data) => {
        setDogs([...dogs,{id:new Date().getTime(), ...data}])
    }
    const getDogID = (id) => {
        setDogs(dogs.filter(dog=>dog.id!==id))
    }
  return (<div style={{display:"flex", margin:'30px', gap:'30px'}}>

          <div>
              <FormCat getFormDataCat={getFormDataCat}/>
              <Cats cats={cats} getCatId={getCatId}/>
          </div>
          <div>
              <FormDog getFormDataDog={getFormDataDog}/>
              <Dogs dogs={dogs} getDogID={getDogID}/>
          </div>
  </div>

  );
}

export default App;
