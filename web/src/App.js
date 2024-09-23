
import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../src/component/Slider"
import Product from './component/Product';
import Productcard from './component/Productcard';
import Bigcard from './component/Bigcard';
import Chairs from './component/Chairs';
import Discover from './component/Discover';
import MostLove from './component/MostLove';
import Trending from './component/Trending';
import Footer from './component/Footer';
import { CartProvider } from './Context/CartContexxt';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Slider />
        <Product />
        <Productcard />
        <Bigcard />
        <Chairs />
        <Discover />
        <MostLove />
        <Trending />
        <Footer />
      </CartProvider>




    </div>
  );
}

export default App;
