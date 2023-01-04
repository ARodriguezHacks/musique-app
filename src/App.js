import Sidebar from "./components/Sidebar";
import Nav from "./components/layout/Nav";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Nav />
      </header>
      <Sidebar />
      <main>
        <h1>Welcome to Musique App!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
          dolorum eaque rem, saepe laborum sit enim, ab sunt consequuntur
          temporibus, rerum magni nesciunt earum hic eius beatae itaque quo?
        </p>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
