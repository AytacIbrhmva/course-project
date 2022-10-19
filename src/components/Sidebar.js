import {useState} from 'react';
import '../style/Sidebar.css';
import {NavLink} from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import {IoIosArrowForward} from 'react-icons/io';
import {CgProfile} from 'react-icons/cg';
import {BsTable} from 'react-icons/bs';
import {IoPeopleOutline} from 'react-icons/io5';
import {FiSettings} from 'react-icons/fi';
import {HiAcademicCap} from 'react-icons/hi';
import {BiMenu} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';

const Navbar = () => {

  const [open, setOpen] = useState('false')

  const toggle = () => {setOpen(!open)};

  

  return (
    <nav className={open ? 'navbar ml-opposite-280' : 'navbar ml-0'}>          
      <BiMenu onClick={toggle} className={open ? 'menu-icon ml-280' : 'menu-icon d-none'}/>
      <MdClose onClick={toggle} className='menu-icon close'/>
      <div className="nav-header">
        <div className="nav-brand">
          <span className="font-size-30">L</span> oGooo 
        </div> 

        <ul>
          <li>
            <NavLink className='nav-link' to="/">         
              <span className='left' >
                <GridViewIcon className='icon-left' /> 
                Control Panel
              </span>
              <IoIosArrowForward className='icon-right' />
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="/profile">    
              <span className='left' >
                <CgProfile className='icon-left' />
                Profile
              </span>
              <IoIosArrowForward className='icon-right' />
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="/table">
              <span className='left' > 
              <BsTable className='icon-left' />
                Table
              </span>
              <IoIosArrowForward className='icon-right' />
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="/class">
              <span className='left' >
                <IoPeopleOutline className='icon-left' />
                Class
              </span>
              <IoIosArrowForward className='icon-right' />
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="/achievements">
              <span className='left' > 
                <HiAcademicCap className='icon-left' />
                Achievements
              </span>
              <IoIosArrowForward className='icon-right' />
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to="/settings">
              <span className='left' > 
                <FiSettings className='icon-left' />
                Settings
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-bottom">
        <img src="https://globalcertification.com.au/wp-content/uploads/2021/09/globalcert.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <button>
          Lorem, ipsum dolor.
        </button>
      </div>
    </nav>
  )
}

export default Navbar