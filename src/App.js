import './App.css';
import UserDetails from './components/UserDetails';

const persons = [

  {
      id: 1,
      name: "Anderson",
      age: 38,
  },

  {
      id: 2,
      name: "Larissa",
      age: 30,
  },

  {
      id: 3,
      name: "Pedro",
      age: 6,
  }

]

function App() {


  return (

    <>

    {persons.map((person) => (
      <UserDetails key={person.id} name={person.name} age={person.age} />
    ))}

    </>
  )
}

export default App;
