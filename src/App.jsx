import { useState } from 'react'
import { reverse } from './helpers'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name}/>
    </div>
  )
}

export default App

function Title(props){
  return(
    // eslint-disable-next-line react/prop-types
    <h1 className="title">Welcome, {props.name}!</h1>
  )
}

function NameLength(props){
  
  return(
    <p className="name-length">
        Did you know that {props.name} is {props.name.length} characters long?!
      </p>
  )
}

function NameReversed(props){
  
  return(
    <p className="name-reversed">
        Also, {props.name} backwards is {reverse(props.name)}
      </p>
  )
}