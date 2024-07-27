// Este es el componente de las tarjetas que recibe por
// props los valores que debe mostrar
// Tambien importa la interfaz para el tipado

import { Coffee } from '../api/coffee.d.types';

interface CardProps {
  coffee: Coffee;
}

export default function Card({ coffee }: CardProps) {
  return (
    <div className='border p-4 rounded-lg shadow-md'>
      <img
        src={coffee.image}
        alt={coffee.title}
        className='w-full h-48 object-cover rounded-md mb-4'
      />
      <h3 className='text-xl font-semibold mb-2'>{coffee.title}</h3>
      <p className='mb-2'>{coffee.description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {coffee.ingredients.map((ingredient, index) => (
          <span
            key={index}
            className='bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow-md'
          >
            {ingredient}
          </span>
        ))}
      </div>
    </div>
  );
}
