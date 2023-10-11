import React from 'react'
import Logo from './logo';
import { SideBarRoutes } from './Sidebar-routes';

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm p-8'>
   <div className='p-6'>
<Logo />
   </div>
  <div className='flex flex-col w-full'>
<SideBarRoutes />
  </div>
      </div>
  )
}

export default Sidebar;