import { BrowserRouter } from 'react-router';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useEffect } from 'react';
import { useAuthStore, useCommonStore } from './store';
import { useCartStore } from './store/cart.store';

function App() {
  localStorage.setItem('language', 'en');
  const authorized = useAuthStore(state => state.status);
  const getCategories = useCommonStore(state => state.getCategories);
  const getProducts = useCommonStore(state => state.getProducts);
  const initialCart = useCartStore(state => state.initialCart);
  const resetCart = useCartStore(state => state.resetCart);

  const loadCategories = async () => {
    try {
      await getCategories({});
    } catch (error) {
      console.log(error);
    }
  };

  const loadProducts = async () => {
    try {
      await getProducts({});
    } catch (error) {
      console.log(error);
    }
  };
  const loadCart = async () => {
    try {
      await initialCart({});
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadCategories();
    loadProducts();
    if (authorized === 'authorized') {
      loadCart();
    } else {
      resetCart();
    }
  }, [authorized]);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
