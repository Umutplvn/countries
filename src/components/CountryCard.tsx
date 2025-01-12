import React from 'react'
import { CountryType } from '../types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface ICountryProps {
    country: CountryType
}


const CountryCard: React.FC<ICountryProps> = ({country}) => {
console.log(country);

  
  return (
    <div>
       <Card style={{ width: '18rem', height:"20rem" }}>
      <Card.Body>
      <Card.Img style={{height:"10rem"}} variant="top" src={country.flags.png} />
        <Card.Title >{country.name.official}</Card.Title>
        <Button style={{position:"absolute", bottom:"0.5rem", left:"0.5rem", backgroundColor:"#7f7f7f", border:"none"}} >Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CountryCard