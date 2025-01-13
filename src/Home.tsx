import axios from 'axios';
import React from 'react';
import { CountryType } from "./types"
import { useState, useEffect } from "react"
import CountryCard from './components/CountryCard';
import bgImage from "../src/assets/world.svg"


function App() {

    const [loading, setLoading] = useState<Boolean>(false)
    const [filterCountries, setFilterCountries] = useState<CountryType[]>([])
    const [countries, setCountries] = useState<CountryType[]>([])
    const [search, setSearch] = useState<String>("")


    const filterCountryData: () => void = () => {
        const searchLower = search.toLowerCase(); 
        const data = countries?.filter((country) => {
            const commonName = country?.name?.common?.toLowerCase();
            const altSpellings = country?.altSpellings?.map(spelling => spelling.toLowerCase()) || [];
            return commonName?.includes(searchLower) || altSpellings.some(spelling => spelling.includes(searchLower));
        });
        setFilterCountries(data);
    };

    const getCountries = async () => {
        setLoading(true)
        try {
            const { data } = await axios<CountryType[]>("https://restcountries.com/v3.1/all")
            setCountries(data)
            setFilterCountries(data)

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])


    const onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        setSearch(e.target.value)
        filterCountryData()
    }


    useEffect(() => {
        filterCountryData()
    }, [search])

 
    return (<>
    
    <div style={{
        width: "100vw", height: "100vh", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", padding: "3rem 2rem 5rem 2rem ", overflow: "scroll", backgroundImage: `url(${bgImage})`, backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }}>

        <div style={{ width: "100vw", paddingBottom: "3rem", display: "flex", justifyContent: "center" }}>
            <input type="text" style={{ width: "20rem", height: "2rem", borderRadius: "1rem", paddingLeft: "1rem" }} autoFocus placeholder='Search...'
                value={`${search}`}
                onChange={(e) => onChangeFilter(e)}
            />
        </div>

        {filterCountries?.map((country) => {
            return (
                <CountryCard key={country?.name?.common} country={country} />
            )
        })}

    </div>

      
    </>
    );
}

export default App;