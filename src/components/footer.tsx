import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-[1080px] flex flex-row justify-between items-center align-middle text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-xl font-bold mb-2'>Cafetería El Aroma</h2>
            <p className='mb-2'>123 Café Street, Ciudad del Café</p>
            <p className='mb-2'>Tel: (123) 456-7890</p>
            <p>Correo: contacto@cafeteriaelaroma.com</p>
          </div>
          <div className='mt-4 md:mt-0'>
            <h3 className='text-lg font-semibold mb-2'>Seguinos en</h3>
            <div className='flex justify-center md:justify-start space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                <FaFacebookF />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                <FaTwitter />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className='text-center mt-6 border-t border-gray-700 pt-4'>
          <p>&copy; 2024 Cafetería El Aroma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
