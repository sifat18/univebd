import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CBadge } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  // cilBell,
  // cilCalculator,
  // cilChartPie,
  // cilCursor,
  // cilNotes,
  cilPencil,
  // cilPuzzle,
  // cilSpeedometer,
  // cilStar,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
// import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import useAuth from '../../Context/useAuth'
import { RiMapPinUserLine } from 'react-icons/ri'

export const AppSidebarNav = () => {
  const { user, admin, employer } = useAuth()
  const location = useLocation()
  const admin_nav = [
    {
      component: CNavItem,
      name: user.displayName,
      to: '/dashboard',
      icon: <RiMapPinUserLine customClassName="nav-icon text-dark" />,

    },

    {
      component: CNavTitle,
      name: 'Navigate',
    },
    {
      component: CNavItem,
      name: 'Make New Admin',
      to: '/dashboard/adadmin',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Make New Tutor',
      to: '/dashboard/adtutor',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Make New Employer',
      to: '/dashboard/ademployer',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },

    {
      component: CNavItem,
      name: 'Create New Course',
      to: '/dashboard/addcourse',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Available Candidates',
      to: '/dashboard/candidates',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'Create Employer Profile',
      to: '/dashboard/employer_profile',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },
  ]
  const employer_nav = [
    {
      component: CNavItem,
      name: user.displayName,
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
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },

  ]
  const _nav = [
    {
      component: CNavItem,
      name: user.displayName,
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
      icon: <CIcon icon={cilDrop} customClassName="nav-icon text-dark" />,
    },
    {
      component: CNavItem,
      name: 'My Courses',
      to: `/dashboard/mycourses`,
      icon: <CIcon icon={cilPencil} customClassName="nav-icon text-dark" />,
    },
    // {
    //   component: CNavTitle,
    //   name: 'Components',
    // },
    // {
    //   component: CNavGroup,
    //   name: 'Base',
    //   to: '/dashboard/base',
    //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    //   items: [
    //     {
    //       component: CNavItem,
    //       name: 'Accordion',
    //       to: '/dashboard/base/accordion',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Breadcrumb',
    //       to: '/dashboard/base/breadcrumbs',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Cards',
    //       to: '/dashboard/base/cards',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Carousel',
    //       to: '/dashboard/base/carousels',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Collapse',
    //       to: '/dashboard/base/collapses',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'List group',
    //       to: '/dashboard/base/list-groups',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Navs & Tabs',
    //       to: '/dashboard/base/navs',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Pagination',
    //       to: '/dashboard/base/paginations',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Placeholders',
    //       to: '/dashboard/base/placeholders',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Popovers',
    //       to: '/dashboard/base/popovers',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Progress',
    //       to: '/dashboard/base/progress',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Spinners',
    //       to: '/dashboard/base/spinners',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Tables',
    //       to: '/dashboard/base/tables',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Tooltips',
    //       to: '/dashboard/base/tooltips',
    //     },
    //   ],
    // },
    // {
    //   component: CNavGroup,
    //   name: 'Buttons',
    //   to: '/dashboard/buttons',
    //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    //   items: [
    //     {
    //       component: CNavItem,
    //       name: 'Buttons',
    //       to: '/dashboard/buttons/buttons',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Buttons groups',
    //       to: '/dashboard/buttons/button-groups',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Dropdowns',
    //       to: '/dashboard/buttons/dropdowns',
    //     },
    //   ],
    // },
    // {
    //   component: CNavGroup,
    //   name: 'Forms',
    //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    //   items: [
    //     {
    //       component: CNavItem,
    //       name: 'Form Control',
    //       to: '/dashboard/forms/form-control',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Select',
    //       to: '/dashboard/forms/select',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Checks & Radios',
    //       to: '/dashboard/forms/checks-radios',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Range',
    //       to: '/dashboard/forms/range',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Input Group',
    //       to: '/dashboard/forms/input-group',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Floating Labels',
    //       to: '/dashboard/forms/floating-labels',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Layout',
    //       to: '/dashboard/forms/layout',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Validation',
    //       to: '/dashboard/forms/validation',
    //     },
    //   ],
    // },
    // {
    //   component: CNavItem,
    //   name: 'Charts',
    //   to: '/dashboard/charts',
    //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    // },
    // {
    //   component: CNavGroup,
    //   name: 'Icons',
    //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    //   items: [
    //     {
    //       component: CNavItem,
    //       name: 'CoreUI Free',
    //       to: '/dashboard/icons/coreui-icons',
    //       badge: {
    //         color: 'success',
    //         text: 'NEW',
    //       },
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'CoreUI Flags',
    //       to: '/dashboard/icons/flags',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'CoreUI Brands',
    //       to: '/dashboard/icons/brands',
    //     },
    //   ],
    // },
    // {
    //   component: CNavGroup,
    //   name: 'Notifications',
    //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    //   items: [
    //     {
    //       component: CNavItem,
    //       name: 'Alerts',
    //       to: '/dashboard/notifications/alerts',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Badges',
    //       to: '/dashboard/notifications/badges',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Modal',
    //       to: '/dashboard/notifications/modals',
    //     },
    //     {
    //       component: CNavItem,
    //       name: 'Toasts',
    //       to: '/dashboard/notifications/toasts',
    //     },
    //   ],
    // },
    // {
    //   component: CNavItem,
    //   name: 'Widgets',
    //   to: '/dashboard/widgets',
    //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    //   badge: {
    //     color: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   component: CNavTitle,
    //   name: 'Extras',
    // },

  ]
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge className="ms-auto text-dark">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component className='text-dark'
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
      <Component
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
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
