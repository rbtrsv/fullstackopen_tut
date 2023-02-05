const Header1 = ({ name }) => {
  return <h1>{name}</h1>
}

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  if(courses.length > 0) {
    return (
      <div>
        <Header1 name='Web develepment curriculum' />
        {courses.map((course) => (
        <Course key={course.id} course={course} />
        ))}
      </div>
      )
    }
  return (
  <div>
    <Header1 name='Web develepment curriculum' />
    <p>Course curriculum is empty.</p>
  </div>
  )
}

export default App