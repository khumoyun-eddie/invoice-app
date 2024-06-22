import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";
import avatar from "../assets/avatar.svg";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className=' tablet:w-[6.5rem] tablet:rounded-r-3xl rounded-none bg-[#373B53] flex flex-row tablet:flex-col items-center gap-2 h-[5rem] tablet:h-auto relative z-50'>
      <NavLink to='/' className='flex-1'>
        <img src={logo} alt='logo' className='object-contain h-[5rem] tablet:h-[6.5rem]' />
      </NavLink>
      <div className='py-8 px-7 flex-0'>
        <img src={moon} alt='theme changer icon' />
      </div>
      <div className='self-stretch flex justify-center border-[#494E6E] py-6 tablet:border-t-[1px] border-l-[1px] px-5 flex-0'>
        <img src={avatar} alt='avatart icon' />
      </div>
    </div>
  );
}
