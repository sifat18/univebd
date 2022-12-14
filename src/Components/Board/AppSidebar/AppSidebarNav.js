import PropTypes from 'prop-types'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { CBadge } from '@coreui/react'
// import { CNavItem, CNavTitle } from '@coreui/react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { Container } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import { BsFillInboxFill, BsPersonBadge, BsPersonCheck } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GrFormFolder } from 'react-icons/gr'
import { ImProfile } from 'react-icons/im'
import { IoCreateOutline } from 'react-icons/io5'
import { MdOutlineAdminPanelSettings, MdOutlineComputer } from 'react-icons/md'
import { RiAdminLine, RiMapPinUserLine } from 'react-icons/ri'
import useAuth from '../../Context/useAuth'

export const AppSidebarNav = () => {
  const { user, admin, employer,tutor } = useAuth()
  const location = useLocation()
  const admin_nav = [
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/dashboard',
      icon: <RiMapPinUserLine customClassName=" text-dark" />,

    },

    {
      component: CNavTitle,
      name: 'Navigate',
    }, {
      component: CNavGroup,
      name: ' Admin Routes',
      to: '/dashboard',
      icon: <MdOutlineAdminPanelSettings  customClassName="nav-icon fs-2 ashHover" />,
      items: [

        {
          component: CNavItem,
          name: ' Make New Admin',
          to: '/dashboard/adadmin',
          icon: <RiAdminLine customClassName="nav-icon " />,
        },
        {
          component: CNavItem,
          name: 'Make New Tutor',
          to: '/dashboard/adtutor',
          icon: <FaChalkboardTeacher  customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Make New Employer',
          to: '/dashboard/ademployer',
          icon: <BsPersonCheck customClassName="nav-icon text-dark" />,
        },

        {
          component: CNavItem,
          name: 'Add New Course',
          to: '/dashboard/addcourse',
          icon: <BsFillInboxFill customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Restore Course',
          to: '/dashboard/deletedCourses',
          icon: <BsFillInboxFill customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Available Candidates',
          to: '/dashboard/candidates',
          icon: <BsPersonBadge customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Form Management',
          to: '/dashboard/form_management',
          icon: <GrFormFolder  customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Create Employer Profile',
          to: '/dashboard/employer_profile',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Post Job',
          to: '/dashboard/employer_jobpost',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
      ]
    },
    {
      component: CNavGroup,
      name: 'Employer Routes',
      to: '/dashboard',
      icon: <BiUserCircle  customClassName="nav-icon text-dark" />,
      items: [
        {
          component: CNavItem,
          name: 'Create Employer Profile',
          to: '/dashboard/ademployer',
          icon: <BsPersonCheck customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Available Candidates',
          to: '/dashboard/candidates',
          icon: <BsPersonBadge customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Post Job',
          to: '/dashboard/employer_jobpost',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Applied list',
          to: '/dashboard/posted_jobs',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Posted Jobs ',
          to: '/dashboard/delete_request_form',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Tutor Routes',
      to: '/dashboard',
      icon: <BiUserCircle  customClassName="nav-icon text-dark" />,
      items: [
        {
          component: CNavItem,
          name: 'Create Tutor Profile',
          to: '/dashboard/tutor_profile',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Add New Course',
          to: '/dashboard/addcourse',
          icon: <BsFillInboxFill customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'Course Delete Form ',
          to: '/dashboard/delete_request_form',
          icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
        },
    
      ],
    },
    {
      component: CNavGroup,
      name: 'User Routes',
      to: '/dashboard',
      icon: <BiUserCircle  customClassName="nav-icon text-dark" />,
      items: [
        {
          component: CNavItem,
          name: 'Profile Setting',
          to: `/dashboard/profile/${user.email}/edit`,
          icon: <ImProfile customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'My Courses',
          to: `/dashboard/mycourses`,
          icon: <MdOutlineComputer  customClassName="nav-icon text-dark" />,
        },
        {
          component: CNavItem,
          name: 'My Jobs',
          to: `/dashboard/myjobs`,
          icon: <MdOutlineComputer  customClassName="nav-icon text-dark" />,
        },
      ],
    },
  ]
  const employer_nav = [
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/dashboard',
      icon: <RiMapPinUserLine customClassName="nav-icon text-dark" />,

    },
    {
      component: CNavTitle,
      name: 'Navigate',
    },
    {
      component: CNavItem,
      name: 'Create Employer Profile',
      to: '/dashboard/employer_profile',
      icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Available Candidates',
      to: '/dashboard/candidates',
      icon: <BsPersonBadge customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Post Job',
      to: '/dashboard/employer_jobpost',
      icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Course Delete Form ',
      to: '/dashboard/delete_request_form',
      icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
    },

  ]
  const tutor_nav = [
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/dashboard',
      icon: <RiMapPinUserLine customClassName="nav-icon text-dark" />,

    },
    {
      component: CNavTitle,
      name: 'Navigate',
    },
    {
      component: CNavItem,
      name: 'Create Tutor Profile',
      to: '/dashboard/tutor_profile',
      icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Add New Course',
      to: '/dashboard/addcourse',
      icon: <BsFillInboxFill customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Course Delete Form ',
      to: '/dashboard/delete_request_form',
      icon: <IoCreateOutline customClassName="nav-icon text-dark" />,
    },

  ]
  const _nav = [
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/dashboard',
      icon: <RiMapPinUserLine customClassName="nav-icon text-dark" />,

    },
    {
      component: CNavTitle,
      name: 'Navigate',
    },
    {
      component: CNavItem,
      name: 'Profile Setting',
      to: `/dashboard/update_profile`,
      icon: <BiUserCircle customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'My Courses',
      to: `/dashboard/mycourses`,
      icon: <MdOutlineComputer customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'My Jobs',
      to: `/dashboard/myjobs`,
      icon: <MdOutlineComputer  customClassName="nav-icon text-dark" />,
    },
   
  ]
  const navLink = (name, icon, badge) => {
    return (
      <>
        <Container className="sideblack">
          {icon && <span className='fs-4 mleft'> {icon}</span>}
          {name && name}
          {badge && (
            <CBadge className="ms-auto  ">
              {badge.text}
            </CBadge>
          )}
        </Container>
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component className='ashHover '
        {...(rest.to &&
          !rest.items && {
          component: NavLink,
        })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component className='ashHover'
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>

      {admin && admin_nav &&
        admin_nav.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      {employer &&
        employer_nav.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      {!admin && !employer &&
        _nav.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      {tutor &&
        tutor_nav.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  )
}

