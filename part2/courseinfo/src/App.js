import Course from "./components/Course";

const Header1 = ({ name }) => {
  return <h1>{name}</h1>
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
        <Header1 name='Web development curriculum' />
        {courses.map((course) => (
        <Course key={course.id} course={course} />
        ))}
      </div>
      )
    }

  return (
  <div>
    <Header1 name='Web development curriculum' />
    <p>Course curriculum is empty.</p>
  </div>
  )
}

export default App