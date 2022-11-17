import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Outlet } from 'react-router-dom'

const Scheduling = () => {
  return (
    <Layout title="Agendamento">
      <Outlet></Outlet>
      </Layout>
  )
}

export default Scheduling