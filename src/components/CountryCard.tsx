import React, { useState } from 'react'
import { CountryType } from '../types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface ICountryProps {
    country: CountryType
}


const CountryCard: React.FC<ICountryProps> = ({country}) => {
console.log(country);

const [hover, setHover] = useState<Number>(1)
  
  return (
       <Card style={{ width: '18rem', height:"20rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", cursor:"pointer", transition:"0.2s ease-in-out", transform:`scale(${hover})` }}
       onMouseEnter={()=>setHover(1.02)}
       onMouseLeave={()=>setHover(1)}
       >
      <Card.Body>
      <Card.Img style={{height:"10rem"}} variant="top" src={country.flags.png} />
        <Card.Title style={{width:"100%", position:"absolute", bottom:"2rem", left:"0", textAlign:"center", fontFamily:"sans-serif", fontWeight:"600", height:"3rem"}} >{country.name.official}</Card.Title>

      </Card.Body>
    </Card>
  )
}

export default CountryCard