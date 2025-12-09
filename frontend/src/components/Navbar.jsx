import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">

        <h1 className="text-xl md:text-3xl font-bold text-red-500">
          Focas The Future
        </h1>

        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/contact">Contact</Link>
        </div>        
        <DarkModeToggle />
      </div>
    </nav>
  );
}
