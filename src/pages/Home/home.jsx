import React from 'react'
import Bannar from './components/bannar'
import Catagory from './components/catagory/catagory'
import PorularItem from './components/porularItem'
import ManuPralex from './components/manuPralex.jsx/manuPralex'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Boss Restrurent || Home
        </title>
      </Helmet>
       <Bannar></Bannar>
       <Catagory></Catagory>
       <PorularItem></PorularItem>
       <ManuPralex></ManuPralex>
    </div>
  )
}

export default Home
