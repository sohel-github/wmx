import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatWmx } from './containers'
import { Navbar, Brand, Wmx } from "./components";

import './index.css'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatWmx />
      <Features />
      <Possibility />
      <Wmx />
      <Blog />
      <Footer />
    </div>
  )
}

export default App