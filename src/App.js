import Sidebar from "./components/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
        <nav>
          <ul>
            <li>Musique App Logo</li>
            <li>Login/Sign Up</li>
            <li>Search</li>
            <li>Browse</li>
          </ul>
        </nav>
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
