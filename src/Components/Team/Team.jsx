import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'

const Team = () => {

    const [teams, setTeams] = useState([])
    useEffect(() =>{
        fetch('/teams.json')
        .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
    <div className="mx-auto max-w-3xl md:text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
        People who made it successful
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis
        a vel error explicabo voluptatum nihil possimus veritatis eos culpa.
      </p>
    </div>
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {
            teams.map(team => <TeamCard key={team.id} team={team}/>)
        }
    </div>
  </div>
  
  )
}

export default Team