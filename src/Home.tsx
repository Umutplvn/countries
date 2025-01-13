import axios from "axios";
import React, { useState, useEffect } from "react";
import { CountryType } from "./types";
import CountryCard from "./components/CountryCard";
import bgImage from "../src/assets/world.svg";
import loadingGif from "./assets/bouncing-circles.svg";

function App() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [filterCountries, setFilterCountries] = useState<CountryType[]>([]);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [search, setSearch] = useState<string>("");

  const filterCountryData = () => {
    const searchLower = search.toLowerCase();
    const data = countries?.filter((country) => {
      const commonName = country?.name?.common?.toLowerCase();
      const altSpellings = country?.altSpellings?.map((spelling) => spelling.toLowerCase()) || [];
      return commonName?.includes(searchLower) || altSpellings.some((spelling) => spelling.includes(searchLower));
    });
    setFilterCountries(data);
  };

  const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
    timeout: 20000, 
    headers: {
      "Content-Type": "application/json",
    },
  });

const getCountries = async () => {
  setLoading(true);
  try {
    const { data } = await api.get<CountryType[]>("/all");
    setCountries(data);
    setFilterCountries(data);
  } catch (error) {
    console.error("API Hatası:", error);
  } finally {
    setLoading(false);
  }
};
  

useEffect(() => {
  getCountries();
}, []);

useEffect(() => {
  filterCountryData();
}, [search, countries]);

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); 
  };



  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "3rem 2rem 5rem 2rem ",
          overflow: "scroll",
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          maxWidth: "1200px",
          margin: "2rem auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div style={{ width: "100vw", paddingBottom: "3rem", display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            style={{ width: "20rem", height: "2rem", borderRadius: "1rem", paddingLeft: "1rem" }}
            autoFocus
            placeholder="Search..."
            value={search}
            onChange={onChangeFilter}
          />
        </div>

        {loading ? (
          <div style={{ width: "100vw", textAlign: "center", height: "100vh" }}>
            <img src={loadingGif} alt="" style={{ width: "50px" }} />
          </div>
        ) : (

<>
{filterCountries?.length > 0 ? (
  filterCountries.map((country) => (
    <CountryCard key={country?.name?.common} country={country} />
  ))
) : (
  <div style={{ width: "100vw", textAlign: "center", height: "100vh", display: "flex", flexDirection: "column",alignItems: "center" }}>
    <h1 style={{ marginBottom: "1rem" }}>Data couldn't be retrieved.</h1>
    <p style={{ marginBottom: "1rem" }}>
      This issue may be caused by the API provider. Please try refreshing the page or check back later.
    </p>
    <button 
      onClick={() => window.location.reload()} 
      style={{
        padding: "0.2rem 0.5rem",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "#FFF",
        cursor: "pointer"
      }}
    >
      Refresh Page
    </button>
  </div>
)}

</>
)}
      </div>
    </>
  );
}

export default App;
