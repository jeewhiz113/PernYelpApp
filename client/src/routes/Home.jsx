import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

function Home() {
  return (
    <div>
      <h3>Check why deleting restaurant does not work?!?!?!?!!</h3>
      <h2>Check to see if the sync is working between the dev files and the react container</h2>
      <Header/>
      <AddRestaurant/>
      <RestaurantList/>
    </div>
  )
}

export default Home
