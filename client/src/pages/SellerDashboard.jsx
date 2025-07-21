import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { sellerNavItems } from '../consts/DashboardConsts'

const SellerDashboard = () => {

  return (
    <DashboardLayout navItems={sellerNavItems}/>
  )
}

export default SellerDashboard