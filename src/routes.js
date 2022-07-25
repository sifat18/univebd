import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// admin
const Admin = React.lazy(() => import('./Components/Board/AddAdmin/Admin'))
const AddInstructor = React.lazy(() => import('./Components/Board/AddInstructor/AddInstructor'))
const Edit = React.lazy(() => import('./Components/CourseEdit/Edit'))
const CourseAdd = React.lazy(() => import('./Components/Addcourse/CourseAdd'))
const Candidate = React.lazy(() => import('./Components/Board/Candidates/Candidate'))

// user
const MyCourses = React.lazy(() => import('./Components/Board/UserRoutes/MyCourses'))
const ProfileUpdate = React.lazy(() => import('./Components/Board/UserRoutes/Profile_Update'))
// defines the info for displaying in breadcrumb
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/dashboard/adadmin', name: 'Admin', element: Admin },
    { path: '/dashboard/adtutor', name: 'AddInstructor', element: AddInstructor },
    { path: '/dashboard/edit/:id', name: 'Edit', element: Edit },
    { path: '/dashboard/addcourse', name: 'CourseAdd', element: CourseAdd },
    { path: '/dashboard/update_profile', name: 'ProfileUpdate', element: ProfileUpdate },
    { path: '/dashboard/mycourses', name: 'MyCourses', element: MyCourses },
    { path: '/dashboard/candidates', name: 'Candidate', element: Candidate },
]

export default routes
