// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import SpotlightProduct from "../components/SpotlightProduct";
import TrustStrip from "../components/TrustStrip";
import { motion } from "framer-motion";

function Home() {
 return (
 <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  <Hero />
  <SpotlightProduct />
  
  <Categories />
  <FeaturedProducts />
  <TrustStrip />
</motion.div>
  );
}

export default Home;