import React,  { useState }  from 'react';
import axios from 'axios';
import {TextForm} from './Form';
import './App.css';




export const App = ()=> {
  const [translation, setTranslation] = useState(null);

   const getTranslation= async (text:string)=> {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/translation/ru/${text}`);
      setTranslation(response.data.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit =(value: any)=>{
    console.log(value)
    getTranslation(value.text)
  
    }

  return (
    <div className="App">
     <TextForm handleSubmit={handleSubmit}/>

     <br/>
     <br/>
{translation? <div>{translation}</div>:null}


    </div>
  );
}

