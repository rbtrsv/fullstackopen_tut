const Persons = ({ personsShown, deletePerson }) => {
  return (

    <div>
      {personsShown.map((p) => (
        <div key={p.name}>
          {p.name} {p.number}
          <button onClick={() => deletePerson(p.id, p.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Persons
