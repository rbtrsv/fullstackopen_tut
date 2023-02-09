import Person from "./Person";

const Persons = ({ personsShown }) => {
	return (

		<div>
			{personsShown.map((person) => (
				<Person key={person.name} person={person} />
			))}
		</div>
	)
}

export default Persons
