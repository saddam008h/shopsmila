
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import MostVisitedShops from './components/MostVisitedShops';

export default function Home() {
  return (
   <div>
      <Navbar />
      <Hero />
      <Categories />
      <MostVisitedShops/>
   </div>
  )
}
