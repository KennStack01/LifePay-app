import React from "react"
import HomeComponent from '../Components/HomeComponent'
import SEO from '../Components/Seo'


function Home() {
  return (
    <div className="bg-gray-100">
      <SEO title="LifePay - App" description="Quick Pay. Quick Offer | Simplest way to pay in China and everywhere 🎉" />
      <HomeComponent/>
    </div>
  )
}

export default Home