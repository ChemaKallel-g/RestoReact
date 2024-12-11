import HomePage from '../Pages/Home/HomePage';
import CategoryPage from '../Pages/Home/CategoryPage';
import LoginPage from '../Pages/Home/LoginPage';
import RegisterPage from '../Pages/Home/RegisterPage';
import MenuPage from '../Pages/Home/MenuPage';
import CartPage from '../Pages/Home/CartPage';
import Profile from '../Pages/Profile/Profile';
import CheckoutPage from '../Pages/Home/CheckoutPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/menu',
    element: <MenuPage isAdmin={false}/>
  },  
  {
    path: '/profile',
    element: <Profile />
  }, 
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/category',
    element: <CategoryPage isAdmin={false} />
  },
  {
    path: '/checkout',
    element: <CheckoutPage />
  },
  {
    path: '/account/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
];
