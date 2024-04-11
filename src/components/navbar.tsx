"use client"
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

      // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', add:'/' },
    { id: 2, text: 'Request a Tutor', add:'https://forms.gle/9CyijoguGUuWeLs9A' },
    { id: 3, text: 'FAQ', add:'/' },
    { id: 4, text: 'Register as Tutor', add:'https://forms.gle/mKsQApGzWq4uiWsD9' },
    { id: 5, text: 'About', add:'/' },
  ];

  
  const[keey,setKeey]=useState(1);

  return (
    <>
  <div className='flex justify-between items-center h-24 mx-auto  text-gray-900 bg-gray-100 lg:px-40 md:px-24 px-6 shadow-lg sticky top-0 z-50'>
      {/* Logo */}
      <Image src={'/media/Designer.png'} height={50} width={50} alt="loading..." className=""></Image>
      <h1 className='w-full text-3xl font-bold text-green-500'>Home Tutor</h1>

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            onClick={()=>{setKeey(item.id)}}
            className='p-4 hover:bg-green-200 min-w-fit ease-in-out duration-200 rounded-xl cursor-pointer font-semibold'
          >
            {keey===item.id?
            <Link href={item.add} className="text-green-800 border-b-2 border-green-800 duration-500 ease-in-out">
            {item.text}
            </Link> :
            <Link href={item.add}>
            {item.text}
            </Link>
            }
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose className="text-green-500" size={20} /> : <AiOutlineMenu className="text-green-500" size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-[80%] h-full bg-gray-100 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className="flex items-center">
          <Image src={'/media/Designer.png'} height={50} width={50} alt="loading..." className=""></Image>
          <h1 className='w-full text-3xl font-bold text-green-500 m-4'>Home Tutor</h1>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link href={item.add}>
          <li
            key={item.id}
            className='p-4 border-b hover:bg-green-200 duration-300 hover:text-black cursor-pointer border-gray-200'
          >
            {item.text}
          </li>
            </Link>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Navbar