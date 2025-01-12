import axios from 'axios';
import React from 'react';
import CountryType from "./types.tsx"
import {useState} from "react"

function App() {

 const [countries, setcountries] = useState<CountryType[]>([])

   const getCountries = async ()=>{
    try {
        const {data} = await axios<CountryType[]>("https://restcountries.com/v3.1/all")  
    } catch (error) {
        console.log(error);

    }  

    } 
    
    return (
        <div>
            Countrie With TypeScript
        </div>
    );
}

export default App;