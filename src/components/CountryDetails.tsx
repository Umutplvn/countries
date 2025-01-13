import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bgImage from "../assets/world.svg"

interface CountryType {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  capital: string[];
  region: string;
  population: number;
  languages: { [key: string]: string };
  timezones: string[];
  unMember: boolean;
  maps: {
    googleMaps: string;
  };
}

const CountryDetails: React.FC = () => {

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: '800px',
      width:"90%",
      margin: '3rem auto 10rem',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:"white"
     
    },
    flag: {
      width: '90%',
      height: 'auto',
      borderRadius: '1rem',
      marginBottom: '2rem',
    },
  };

  const { cca2 } = useParams<{ cca2: string }>();
  const [country, setCountry] = useState<CountryType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCountry = async () => {
    try {
      const response = await axios.get<CountryType[]>(
        `https://restcountries.com/v3.1/alpha/${cca2}`
      );
      setCountry(response.data[0]);
    } catch (error) {
      console.error('Error fetching country data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cca2) {
      getCountry();
    }
  }, [cca2]);

  if (loading) {
    return <div style={{width:"100vw", textAlign: 'center', marginTop: '2rem', fontWeight:"500", fontSize:"2rem" }}>Loading...</div>;
  }

  if (!country) {
    return <div style={{width:"100vw", textAlign: 'center', marginTop: '2rem', fontWeight:"500", fontSize:"2rem" }}>Country not found</div>;
  }

  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"}}>

    <div style={styles.container}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} style={styles.flag} />
      <h2 style={{fontWeight:"700", marginBottom:"3rem"}}>{country.name.official}</h2>
      <p><strong>Common Name:</strong> {country.name.common}</p>
      <p><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p>
        <strong>Languages:</strong>{' '}
        {Object.values(country.languages || {}).join(', ') || 'N/A'}
      </p>
      <p><strong>Timezones:</strong> {country.timezones?.join(', ')}</p>
      <p><strong>UN Member:</strong> {country.unMember ? 'Yes' : 'No'}</p>
      <p>
        <strong>Google Maps:</strong>{' '}
        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
          View Location
        </a>
      </p>
    </div>
    </div>
  );
};

export default CountryDetails;
