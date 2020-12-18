import './App.css';

// components
import MovieCard from './components/movieCard/MovieCard';
import NavBar from './components/navBar/NavBar';
import Welcome from './components/welcome/Welcome';
import Movies from './components/movies/Movies';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      </header>
      {/* <MovieCard/> */}
      {/* <Welcome /> */}
      <Movies />
    </div>
  );
}

export default App;
