const Header2 = ({ name }) => {
    return <h2>{name}</h2>
}

const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
}

const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
}
  
const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => {
      return s + p.exercises;
    }, 0)
    return <b>total of {total} exercises</b>;
}
  
const Course = ({ course }) => {
    return (
      <div>
        <Header2 name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course