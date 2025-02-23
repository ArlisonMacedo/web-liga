import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../service/api"
import logoImg from '../assets/copa-brasao.png'
import moment from "moment"
import { Loading } from "../components/loading"

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
export function Dashboard() {

  const { id } = useParams()
  const [players, setPlayers] = useState<CostTeam[]>([])
  const [team, setTeam] = useState({
    id: '',
    name: '',
    city: '',
    couch: '',
    cpf: ''
  })

  const navigate = useNavigate()
  // const teamId = localStorage.getItem('id')

  useEffect(() => {
    api.get(`teams/${id}`).then(response => {
      // console.log(response.data)
      setPlayers(response.data)
    })
  }, [])

  useEffect(() => {
    api.get(`teams/only/${id}`).then(response => {
      if (!response.data.id) {
        navigate('/login')
      }
      setTeam(response.data)
    })
  }, [])

  function handleToGoCreatePlayer() {
    navigate(`/createplayer/${id}`)
  }


  function logout() {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('id')
    navigate('/')
  }

  if (!players && team) {
    return (
      <Loading />
    )
  }


  return (
    <div className="h-screen w-screen bg-white">
      <div className='flex justify-center items-center'>
        <img src={logoImg} alt="logo" className='w-[150px]' />
        <h1 className='text-secunday font-black text-6xl items-center'>Campeonato Copa da BR</h1>
      </div>

      <div>
        <div className="flex justify-center items-center my-2">
          <h1 className="font-black text-secundary">Jogadores da equipe {team.name}</h1>
        </div>
        <div className="flex justify-center items-center my-2">
          <button className="bg-green-600 w-30 h-10 text-white font-bold rounded-sm cursor-pointer mx-2 hover:opacity-80 transition-all" onClick={handleToGoCreatePlayer}>Novo Jogador</button>
          <button className="bg-red-600 w-20 h-10 text-white font-bold rounded-sm cursor-pointer hover:opacity-80 transition-all" onClick={logout}>Sair</button>

        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">Nome</th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">CPF</th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">RG</th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">Endereço</th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">Data de Nasc. </th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">Nome da Mãe </th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left text-sm font-semibold text-gray-700">Nome do Pai </th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((player, key) => {
                return (
                  <tr key={key}>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold"> {player.name} </td>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold"> {player.cpf}</td>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold">{player.rg}</td>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold">{player.address}</td>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold">{moment(player.birthdate).format('DD/MM/YYYY')}</td>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold">{player.nameMother}</td>
                    <td className="py-2 px-4 border-b text-sm text-secundary font-bold">{player.nameFather}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>


    </div>
  )
}