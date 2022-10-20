import {
  CContainer,
  CHeader,
  CHeaderBrand, CHeaderNav,
  CHeaderToggler, CNavItem, CNavLink
} from '@coreui/react';
import { BsPersonCircle } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import logo from '../../images/logos/logo.png';
import logo from '../../images/logos/unive_logo.svg';
import useAuth from './../../Context/useAuth';

import { cilMenu } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
// import { logo } from '../../../assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { user } = useAuth()

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* mobile view brand */}

        <CHeaderBrand className="me-auto d-md-none" to="/">
        <img src={logo} height={28} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
          <CNavLink to="/" component={NavLink}>
            <img src={logo} height={38} alt="Logo" />
            </CNavLink>
          </CNavItem>
     
        </CHeaderNav>
      
         {/* user name */}
         <CHeaderNav className="ms-3">
        {user.photoURL ? <img src={user.photoURL} alt='avatar' width={25} heigth={25} className='img-fluid rounded-circle me-2'/> : <BsPersonCircle className='fs-3 me-2' />} { user.displayName}
          {/* <AppHeaderDropdown /> */}
        </CHeaderNav>
      </CContainer>
     
    </CHeader>
  )
}
export default AppHeader
