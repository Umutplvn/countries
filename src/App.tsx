import axios from 'axios';
import React from 'react';
import { CountryType } from "./types"
import { useState, useEffect } from "react"
import CountryCard from './components/CountryCard';
import bgImage from "../src/assets/world.svg"


function App() {

    const [countries, setCountries] = useState<CountryType[]>([])
    const [loading, setLoading] = useState<Boolean>(false)


    const getCountries = async () => {
        setLoading(true)
        try {
            const { data } = await axios<CountryType[]>("https://restcountries.com/v3.1/all")
            setCountries(data)
        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])



    return (
        <div style={{
            width: "100vw", height: "100vh", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", padding: "3rem 2rem 5rem 2rem ", overflow: "scroll", backgroundImage: `url(${bgImage})`, backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        }}>

            <div style={{ width: "100vw", paddingBottom: "3rem", display: "flex", justifyContent: "center" }}>
                <input type="text" style={{ width: "20rem", borderRadius: "1rem", paddingLeft: "1rem" }} autoFocus placeholder='Search...' />
            </div>

            {countries?.map((country) => {
                return (
                    <CountryCard key={country?.name?.official} country={country} />
                )
            })}

        </div>
    );
}

export default App;