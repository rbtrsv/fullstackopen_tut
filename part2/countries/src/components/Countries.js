import { useState } from "react"
import CountryInfo from "./CountryInfo"

const Countries = ({ countriesShown }) => {
  const [country, setCountry] = useState("")

  if (countriesShown.length === 1) {
      return <CountryInfo c={countriesShown[0]} />
  } else if (countriesShown.length <= 10) {
      return (
          <div>
              {countriesShown.map((c) => (

                  <div key={c.name.official}>
                    {c.name.common}
                    <button onClick={() => setCountry(c)}>show</button>
                  </div>
              ))}
              {country ? <CountryInfo c={country} /> : null}
          </div>
      )
  } else if (countriesShown.length > 10) {
      return <div>Too many matches, specify another filter</div>
  }
}

export default Countries