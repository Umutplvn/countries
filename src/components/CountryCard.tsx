import React, { useState } from 'react';
import { CountryType } from '../types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface ICountryProps {
  country: CountryType;
}

const CountryCard: React.FC<ICountryProps> = ({ country }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false); 
  const [isLinkVisible, setIsLinkVisible] = useState<boolean>(false); 

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLinkVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLinkVisible(false);
  };


  return (
    <Link to={`/country/${country.cca2}`} style={{ textDecoration: 'none' }}>
       <Card
      style={{
        width: '18rem',
        height: '20rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        cursor: 'pointer',
        transition: '0.2s ease-in-out',
        transform: `scale(${isHovered ? 1.02 : 1})`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Body>
        <Card.Img style={{ height: '10rem', objectFit: 'cover' }} variant="top" src={country.flags.png} />
        <Card.Title
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '2rem',
            left: '0',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            fontWeight: '600',
            height: '3rem',
          }}
        >
          {country.name.official}
        </Card.Title>
      </Card.Body>

      <i
        className="bi bi-box-arrow-up-right"
        style={{
          fontSize: '1.2rem',
          padding: '0.5rem',
          display: isLinkVisible ? 'block' : 'none',
          fontWeight: 'bold',
        }}
      />
    </Card>
</Link>
 
  );
};

export default CountryCard;
