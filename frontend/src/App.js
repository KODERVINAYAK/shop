import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
// import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <> 
    <Header />
    <main className='py-3'>
    <Container>
    {/* <h1>Welcome to proshop  </h1> */}
    {/* <HomeScreen /> */}
    <Outlet />
    </Container>
    </main>
    <Footer />


    </>
  )
}

export default App