import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="/src/main.css" />
    </Helmet>

    <div>Home</div>
    <Link to="/contact">contact</Link>

    </>
  )
}

export default Home