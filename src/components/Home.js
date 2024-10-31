import React from "react";


const Home = () => {
  const name = "Your Name"
  const city =  "Your City"
  // update the JSX being returned!
  return (
  <div id="Home">
    <h1 style={{color: 'firebrick'}}>
      {name} is a web Developer from {city}
    </h1>
  </div>
  )
}

export default Home;
