import WeatherInfo from "./WeatherInfo"

const CountryInfo = ({ c }) => {
    return (
      <div>
        <h1>{c.name.common}</h1>
        <div>capital {c.capital}</div>
        <div>area {c.area}</div>
        <h2>languages:</h2>
        <ul>
          {Object.values(c.languages).map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <img src={c.flags.png} alt={`The flag of ${c.name.common}`}/>
        <WeatherInfo c={c.capital} />
      </div>
    )
}
 
export default CountryInfo