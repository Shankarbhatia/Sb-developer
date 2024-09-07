import React from 'react'
import { PopupButton } from "react-calendly";


function Calendly() {
  return (
    <div className="App">
    <PopupButton
      url="https://calendly.com/naveenrdesigns"
      rootElement={document.getElementById("root")}
      text="or Book Free Consultant"
      textColor="#ffffff"
      color="#00a2ff"
    />
  </div>
  )
}

export default Calendly

