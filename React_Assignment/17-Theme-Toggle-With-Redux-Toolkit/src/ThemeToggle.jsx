import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={`theme-container ${darkMode ? 'dark' : 'light'}`}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
