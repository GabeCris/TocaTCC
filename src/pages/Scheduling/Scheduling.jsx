import React from 'react'
import Layout from '../../components/Layout/Layout'
import CardOption from '../../components/CardOption/CardOption'
import Sport from '../Steps/Step2/Sport'
import Type from '../Steps/Step1/Type'
import { Outlet } from 'react-router-dom'

const Scheduling = () => {
  return (
    <Layout title="Agendamento">
      <Outlet></Outlet>
      </Layout>
  )
}

export default Scheduling