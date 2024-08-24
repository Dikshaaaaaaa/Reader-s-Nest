import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>At BookHub, we believe in the power of stories and the joy of reading. Our platform is designed to bring the best of the literary world to your fingertips. Whether you’re looking for your next great read or just browsing through the latest releases, BookHub has something for everyone.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header