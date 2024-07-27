import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='w-[100vw] min-h-screen bg-gray-100 py-8'>
      <div className='w-[1080px] mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>Contáctanos</h1>

        <div className='bg-white shadow-lg rounded-lg p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Información de Contacto
          </h2>
          <div className='flex flex-col md:flex-row md:space-x-6'>
            <div className='flex items-center mb-4 md:mb-0'>
              <FaMapMarkerAlt className='text-2xl text-blue-600 mr-3' />
              <p className='text-lg'>123 Café Street, Ciudad del Café</p>
            </div>
            <div className='flex items-center mb-4 md:mb-0'>
              <FaPhone className='text-2xl text-blue-600 mr-3' />
              <p className='text-lg'>Tel: (123) 456-7890</p>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='text-2xl text-blue-600 mr-3' />
              <p className='text-lg'>Correo: contacto@cafeteriaelaroma.com</p>
            </div>
          </div>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-2xl font-semibold mb-4'>Envíanos un Mensaje</h2>
          <form action='#' method='POST' className='space-y-4'>
            <div className='flex flex-col md:flex-row md:space-x-4'>
              <input
                type='text'
                name='name'
                placeholder='Nombre'
                className='p-3 border border-gray-300 rounded-lg w-full md:w-1/2'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Correo Electrónico'
                className='p-3 border border-gray-300 rounded-lg w-full md:w-1/2'
                required
              />
            </div>
            <textarea
              name='message'
              placeholder='Tu Mensaje'
              className='p-3 border border-gray-300 rounded-lg w-full'
              required
            ></textarea>
            <button
              type='submit'
              className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>Ubicación</h2>
          <div className='relative w-full h-64 rounded-lg overflow-hidden'>
            <iframe
              title='Mapa de Buenos Aires'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.103024863318!2d-58.42925149999999!3d-34.6036848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab0f1817e09%3A0x2a5e2b1d407c7e60!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2ses!4v1630401340473!5m2!1ses!2ses'
              className='absolute top-0 left-0 w-full h-full border-0'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
