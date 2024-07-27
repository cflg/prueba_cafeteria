/* 
Este es el componente en donde mas logica hay porque llamo a funciones asincronas
y renderizo diferentres bloques de acuerdo a si esta cargando, dio un error
o la data esta disponible
*/

import { useState, useEffect } from 'react';
import { GetHotCoffee, GetIcedCoffee } from '../api/coffeeAPI';
import Card from '../components/card';
import LoadingImg from '../assets/loading.gif';
import { Coffee } from '../api/coffee.d.types';

export default function Products() {
  // estos estados son para almacenar las respuestas de la API
  const [hotCoffee, setHotCoffee] = useState<Coffee[]>([]);
  const [icedCoffee, setIcedCoffee] = useState<Coffee[]>([]);
  // este estado me sirve para saber que tab estoy viendo
  // esto no estaba en las spec del proyecto pero simula una especie
  // de filtrado o categorias y me parecio que quedaba bien
  const [activeTab, setActiveTab] = useState<'hot' | 'iced'>('hot');
  // Estados de loading y error para usar dentro del useEffect y darle
  // al usuario informaicon mas completa
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // aca me armo la fucnion para traer los datos y llenar los estados
    async function fetchData() {
      const hotCoffees = await GetHotCoffee();
      const icedCoffees = await GetIcedCoffee();
      setHotCoffee(hotCoffees);
      setIcedCoffee(icedCoffees);
    }
    try {
      // seteo el estado de loading en true para que se muestre un mensaje
      // de carga mientras llegan los datos
      setLoading(true);
      //ejecuto la funcion que me trae datos
      fetchData();
    } catch (err) {
      // Si existe algun error seteo el estado para mostrarselo al usuario
      setError('Algo malio sal 🤔');
    } finally {
      // este bloque se ejecuta independientemente del resultado del try-catch
      // y lo que hago es setear el estado de loading en falso para que
      // desaparezca el mensaje de carga
      // y se muestre el contenido o el error
      // solo le agregue un timeout para que se aprecie el mensaje de carga
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  // SI LOADING ES TRUE MUESTRO ESTE BLOQUE
  if (loading)
    return (
      <div className=' w-[100vw] flex flex-col items-center mb-4'>
        <div className='w-[1080px] flex flex-col'>
          <img
            src={LoadingImg}
            alt='Cargando...'
            className='w-full h-auto object-cover rounded-md mt-4'
          />
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-semibold'>
            Cargando...
          </p>
        </div>
      </div>
    );

  // SI EL ERROR ES TRUE MUESTRO EL ERROR
  if (error)
    return (
      <div className=' w-[100vw] flex flex-col items-center'>
        <div className='w-[1080px] flex flex-col'>
          <p>{error}</p>;
        </div>
      </div>
    );

  // EN OTRO CASO RENDERIZO EL CONTENEDOR Y LE PASO AL COMPONENTE CARD
  // LAS PROPS
  return (
    <div className=' w-[100vw] flex flex-col items-center mb-4'>
      <div className='w-[1080px] flex flex-col'>
        <h1 className='text-2xl font-semibold mb-4 mt-4 '>
          Nuestros Productos
        </h1>
        <div className='flex space-x-4 mb-4'>
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === 'hot' ? 'border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('hot')}
          >
            Café Caliente
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === 'iced' ? 'border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('iced')}
          >
            Café Helado
          </button>
        </div>
        <div>
          {activeTab === 'hot' && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {hotCoffee.map((coffee) => (
                <Card key={coffee.id} coffee={coffee} />
              ))}
            </div>
          )}
          {activeTab === 'iced' && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {icedCoffee.map((coffee) => (
                <Card key={coffee.id} coffee={coffee} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
