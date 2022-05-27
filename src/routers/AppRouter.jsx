import React from 'react' ;
import { Routes, Route, BrowserRouter } from 'react-router-dom' ;
import { HomeScreen } from '../components/home/HomeScreen';
import { NavBar } from '../components/navbar/NavBar';
import { OffersScreen } from '../components/offers/OffersScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { LoginScreen } from '../components/login/LoginScreen';





export const AppRouter = () => {
  return (
    <BrowserRouter>

      <NavBar /> 
            
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/offers" element={<OffersScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />

      </Routes>

    </BrowserRouter>

  )
}
