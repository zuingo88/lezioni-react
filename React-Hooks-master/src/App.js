import Inizio from "./lezioni/7-prop-drilling/inizio/prop-drilling";  // Se la cartella inizio ci dovesse contenere un file index, sarà aperto di defalut senza che debba necesssariamente specificarlo. 

function App() {
  return (
    <div className="App">
      <section className="container text-center my-3">
        <Inizio />
      </section>
    </div>
  );
}

export default App;
