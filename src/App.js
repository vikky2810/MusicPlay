import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <Player src="/test1.mp3" songName="Steve Lacy - Bad Habit " />
    </div>
  );
}

export default App;
