import logo from './logo.svg';
import './App.css';

function App() {

  const person = {
    name: "Shirina",
    title: "Student"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{backgroundColor:'blue', color:'red'}}>Heading: {person.name + " " + person.title}</h1>
        <p>I Am A React Developer</p>
        <div style={{display:'flex'}}>
          <Person></Person>
          <Person></Person>
        </div>
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    border:'2px solid red', 
    margin:'10px'
  }
  return (
    <div style={personStyle}>
      <h2 style={{backgroundColor:'green'}}>Name: Sakib Al Hasan</h2>
      <h2>Name: Sakib 2</h2>
    </div>
  )
}

export default App;
