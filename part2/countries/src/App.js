import { useState, useEffect } from "react"
import axios from "axios"
import CountryInfo from "./components/CountryInfo"
import Countries from "./components/Countries"

const App = () => {
  const [query, setQuery] = useState("")
  const [countries, setCountries] = useState([])
  const [countriesShown, setCountriesShown] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((r) => {
      setCountries(r.data)
    })
  }, [])

  const handleSearchInput = (e) => {
    const searchInput = e.target.value
    setQuery(searchInput)
    setCountriesShown(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(searchInput.toLowerCase())
      )
    )
  }

  return (
    <div>
      <div>
        find countries <input value={query} onChange={handleSearchInput} />
      </div>
      <div>
        {countriesShown.length === 1 ?
        (<CountryInfo c={countriesShown[0]} />) : null}

        {countriesShown.length > 10 ? 
        (<div>Too many matches, specify another filter</div>) : 
        (<Countries countriesShown={countriesShown} setCountriesShown={setCountriesShown}/>)}
      </div>
    </div>
  )
}

export default App