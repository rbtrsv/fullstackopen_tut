import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Anecdote = ({title, anecdote, votes}) => (
  <div>
    <h1>{title}</h1>
    <div>{anecdote}</div>
    <div>has {votes} vote(s)</div>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const mostVotes = votes.indexOf(Math.max.apply(null, votes))


  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Anecdote
        title={"Anecdote of the day"}
        anecdote={anecdotes[selected]}
        votes={votes[selected]} />
      <Button handleClick={voteAnecdote} text='vote'/>
      <Button handleClick={randomAnecdote} text='next anecdote'/>
      <Anecdote
        title={"Anecdote with most votes"}
        anecdote={anecdotes[mostVotes]}
        votes={votes[mostVotes]} />
    </div>
  )
}

export default App