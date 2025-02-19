import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../service/api"


interface TeamAndPlayers {

  id: string,
  name: string,
  city: string,
  couch: string,
  cpf: string,
  players: [{
    id: string,
    name: string,
    cpf: string,
    rg: string,
    address: string,
    birthdate: string,
    nameMother: string,
    nameFather: string,
  }]
}

export function Dashboard() {

  const { id } = useParams()
  const [players, setPlayer] = useState<TeamAndPlayers[]>([])

  useEffect(() => {
    api.get(`/teams/${id}`).then(response => {
      console.log(response.data.costTeam)
      setPlayer(response.data.costTeam)
      console.log(players)
    })
  }, [])

  return (
    <div>
      <h1>olá mundo</h1>
    </div>
  )
}