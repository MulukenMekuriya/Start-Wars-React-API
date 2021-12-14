import { React, useState, useEffect } from 'react'

const Vehicles = (type = 1) => {
  const [vehicleID, setVehicleNumber] = useState(1)
  const [myDate, setMyData] = useState([])
}

React.useEffect(() => {
  fetch(`https://swapi.dev/api//vehicles/${vehicleID}`)
      .then((response) => response.json())
      .then((date) => {
        setMyData(date)
      })

  }
// }, [setVehicleNumber])



export default Vehicles
