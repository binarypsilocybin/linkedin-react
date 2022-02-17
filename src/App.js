import './App.css';
function Header(props){
  console.log(props)
  return (
    <header> 
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props){ 
  return(
    <section>
      <p>We serve the most {props.adjective} delicious food around.</p>
    </section>
  )
}

function Footer(){
  return(
    <footer>
      <p>It's true.</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" />
      <Footer year={new Date().getFullYear} />
    </div>
  );
}

export default App;
