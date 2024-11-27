import {assets} from '../assets/assets'


const Navbar = () => {
 

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-primary'>
      <img className='cursor-pointer w-30 h-16' src={assets.logo} alt="Logo" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='hover:text-primary'>Home</li>
        <li className='hover:text-primary'>About</li>
        <li className='hover:text-primary'>Services</li>
        <li className='hover:text-primary'>Contact</li>   
      </ul>
      <button className='bg-primary text-white font-semibold border-none flex w-48  items-center  px-6 py-2.5 rounded-md text-center text-sm hover:scale-105 transition-all duration-300'>Book Appointment</button>  
      </div>
        
  );
};

export default Navbar;
