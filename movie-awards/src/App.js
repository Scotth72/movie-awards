import './App.css';

// components
import MovieCard from './components/movieCard/MovieCard';
import NavBar from './components/navBar/NavBar';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <MovieCard/> */}
      <Welcome/>
    </div>
  );
}

export default App;
