import { Link } from 'react-router-dom';
import CoffeeImage from '../assets/bienvenida.jpg';

export default function Home() {
  return (
    <div className='w-[100vw] flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 to-orange-300'>
      <div className='text-center p-6 bg-white rounded-lg shadow-lg my-16'>
        <img
          src={CoffeeImage}
          alt='Delicious Coffee'
          className='w-full h-64 object-cover rounded-t-lg mb-4'
        />
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>
          Bienvenido a la Cafetería
        </h1>
        <p className='text-lg text-gray-600 mb-4'>
          Disfrutá de nuestros cafés seleccionados y descubrí el sabor perfecto
          para vos.
        </p>
        <Link
          to='/products'
          className='px-6 py-3 bg-amber-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-brown-600 transition-colors'
        >
          Explorar Productos
        </Link>
      </div>
    </div>
  );
}
