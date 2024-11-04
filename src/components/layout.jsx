import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'

function Layout() {
  return (
    <div>
       <main>
        <Header />
        <Outlet />
      </main>   
      <CartTab />
    </div>
  )
}

export default Layout
