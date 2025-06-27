import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tell from '../components/Tell'
import TellGet from '../components/TellGet'
import Stack from '../components/Stack'

function Tellme() {
  return (
    <>
      <Header/>
      <Tell/>
      <TellGet/>
      <Stack/>
      <Footer/>
    </>
  )
}

export default Tellme
