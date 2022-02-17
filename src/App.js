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
      <ul>
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with vegetables"
];




function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
