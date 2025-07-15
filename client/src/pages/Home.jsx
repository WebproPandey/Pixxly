import React from 'react'
import Header from '../components/HomeSection/Header'
import Stories from '../components/HomeSection/Stories'
import Post from '../components/HomeSection/Post'


const Home = () => {
  return (
    <div className="min-h-screen bg-black">
        <Header/>
        <Stories/>
        <Post/>
        

    </div>
  )
}

export default Home