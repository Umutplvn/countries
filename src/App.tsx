import axios from 'axios';
import React from 'react';
import { CountryType } from "./types"
import { useState, useEffect } from "react"
import CountryCard from './components/CountryCard.tsx';
import Loading from './components/Loading.tsx';

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
        <div>
            <Loading loading={loading}>
                {countries.map((country) => {
                    return (
                        <CountryCard key={country.name.official} country={country} />
                    )
                })}
            </Loading>

        </div>
    );
}

export default App;