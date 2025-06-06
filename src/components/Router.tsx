import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";

const Home: React.FC = () => {
  return <h2>Home Page</h2>;
};

const About: React.FC = () => {
  return <h2>About Page</h2>;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
