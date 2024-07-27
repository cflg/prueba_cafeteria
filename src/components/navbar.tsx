import { Link } from 'react-router-dom';
import logo from '../assets/coffee_logo.webp';

export default function NavBar() {
  return (
    <nav className='w-[1080px] flex flex-row justify-between items-center align-middle'>
      <img
        src={logo}
        alt='Logo de la empresa'
        loading='lazy'
        className='h-24'
      />
      <ul className='flex flex-row justify-between w-[60%] text-slate-800 h-full'>
        <li className='p-12 hover:cursor-pointer hover:bg-amber-900 hover:text-white'>
          <Link to='/'>Bienvenida</Link>
        </li>
        <li className='p-12 hover:cursor-pointer hover:bg-amber-900 hover:text-white'>
          <Link to='/products'>Catálogo y Productos</Link>
        </li>
        <li className='p-12 hover:cursor-pointer hover:bg-amber-900 hover:text-white'>
          <Link to='/contact'>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
