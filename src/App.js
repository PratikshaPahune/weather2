import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import MaterialUI from './MaterialUI';
import ObjectPractice1 from './ObjPractice';
import Product from './product';
import Ex from './Ex';
import MaterialTable from './MaterialTable';
import UserDetail from './UserDetail';
import WeatherBackground from './Weather';
import Linkpage from './Linkpage';
import UserDetails1 from './UserDetails1';
import ProductList from './ProductList';
import Axiosget from './Axios1';
import Weather1 from './Weather1';
import Spotify from './Spotify';
import Music from './Music';
import MoviesCard from './MoviesCard';
import Movie from './Movie';


function App() {
  return (

    <BrowserRouter >
      <Routes>
      <Route path ="login" element={<Login />} />
        <Route path ="reg" element={<Register />} />
        <Route path ="objp" element={<ObjectPractice1 />} />
        <Route path="material-ui" element={<MaterialUI />} />
        <Route path="prod1" element={<Product /> } />
        <Route path="exp1" element={<Ex /> } />
        <Route path="material-tbl" element={<MaterialTable />} />
        <Route path="user-details/:id" element={<UserDetail /> } />
        <Route path="weather" element={<WeatherBackground />}/>
        <Route path="lpg" element={<Linkpage />} />
        <Route path="UD" element={<UserDetails1 />}/>
        <Route path="product-list" element={<ProductList />} />
        <Route path="axi" element={<Axiosget /> } />
        <Route path="wed" element={<Weather1 />}/>
        <Route path="spot" element={<Spotify />} />
       <Route path="media" element={<Music />}/>
       <Route path='movie-card' element={<MoviesCard />} />
       <Route path='movies/:movies_name' element={<Movie/>} />
       
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
