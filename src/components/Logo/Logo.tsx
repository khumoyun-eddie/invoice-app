import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ReactNode } from "react";

const Logo = ({ children }: { children: ReactNode | null }) => {
  return (
    <NavLink to='/' className='flex items-center'>
      <img src={logo} alt='logo' className='h-8 mr-3 sm:h-9' />
      {children}
    </NavLink>
  );
};

export default Logo;
