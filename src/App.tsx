import { BrowserRouter } from 'react-router';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  localStorage.setItem('language', 'en');
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
