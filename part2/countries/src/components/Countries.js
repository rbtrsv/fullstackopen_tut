const Countries = ({ countriesShown, setCountriesShown}) => {
  if (countriesShown.length === 1) return null

  return countriesShown.map((c) => (
    <div key={c.name.official}>
      {c.name.common}
      <button onClick={() => setCountriesShown([c])}>show</button>
    </div>
  ))
}

export default Countries