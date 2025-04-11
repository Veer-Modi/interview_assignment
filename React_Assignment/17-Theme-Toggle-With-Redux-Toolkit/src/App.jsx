import ThemeToggle from './ThemeToggle';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={darkMode ? 'App dark' : 'App light'}>
      <ThemeToggle />
    </div>
  );
}

export default App;
