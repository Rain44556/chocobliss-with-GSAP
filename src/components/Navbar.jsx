import React from 'react';

const Navbar = () => {
  return (
 <>
      <nav className='flex items-center justify-between text-yellow-50  w-full h-[9vh] z-99 px-[10vw] fixed'>
        <a className='text-6xl' href="#">ChocoBliss</a>
        <div className="nav-links flex gap-[3vw]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Product</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
