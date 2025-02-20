import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../service/api"


interface CostTeam {

  id: string,
  name: string,
  cpf: string,
  rg: string,
  address: string,
  birthdate: string,
  nameMother: string,
  nameFather: string,

}

interface Team {
  id: string,
  name: string,
  cpf: string,
  couch: string,
  city: string
}

export function Dashboard() {

  const { id } = useParams()
  const [players, setPlayers] = useState<CostTeam[]>([])


  useEffect(() => {
    api.get(`teams/${id}`).then(response => {
      setPlayers(response.data)
    })
  }, [])


  return (
    <div>
      {
        players.map((player, key) => {
          return (
            <div key={key}>
              <p>{player.name}</p>
              <p>{player.cpf}</p>
              <p>{player.rg}</p>
            </div>

          )
        })
      }
    </div>
  )
}