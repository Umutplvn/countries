import React from 'react'
import { CountryType } from '../types'


interface ICountryProps {
    country: CountryType
}


const CountryCard: React.FC<ICountryProps> = ({country}) => {

  return (
    <div>
       <p>{country.name.official}</p>
    </div>
  )
}

export default CountryCard