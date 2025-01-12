import React, { useState } from 'react'
import { CountryType } from '../types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface ICountryProps {
    country: CountryType
}


const CountryCard: React.FC<ICountryProps> = ({country}) => {
console.log(country);

const [hover, setHover] = useState<Boolean>(false)
  
  return (
       <Card style={{ width: '18rem', height:"20rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", cursor:"pointer", transition:"1s ease-in-out" }}
       onMouseEnter={()=>setHover(true)}
       >
      <Card.Body>
      <Card.Img style={{height:"10rem"}} variant="top" src={country.flags.png} />
        <Card.Title >{country.name.official}</Card.Title>
        <Button style={{position:"absolute", bottom:"0.5rem", left:"0.5rem", backgroundColor:"#7f7f7f", border:"none"}} >Details</Button>
      </Card.Body>
    </Card>
  )
}

export default CountryCard