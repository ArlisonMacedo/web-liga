import { useEffect, useState } from 'react'
import logoImg from '../assets/copa-brasao.png'
import api from '../service/api'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Loading } from '../components/loading'


interface Teams {
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
    teamId: string
  }]
}

export function DashboardOwner() {
  const [allTeamsPlayers, setAllTeamsPlayers] = useState<Teams[]>([])
  const navigate = useNavigate()


  useEffect(() => {
    api.get('teams').then(response => {
      // console.log(response.data)
      setAllTeamsPlayers(response.data.teams)
    })
  }, [])

  function handleEdit(idPlayer: string, idTeam: string) {
    navigate(`/editplayer/${idPlayer}/${idTeam}`)
  }

  async function deletePlayer(id: string) {
    api.delete(`players/${id}`).then(() => {
      console.log('Jogador Deletado')
      window.location.reload()
    })
  }

  function logout() {
    localStorage.removeItem('isAuthenticated')
    navigate('/')
  }

  if (!allTeamsPlayers) {
    return (
      <Loading />
    )
  }

  return (
    <div className='h-screen w-screen bg-gray-50'>
      <div className='flex justify-center items-center'>
        <img src={logoImg} alt="logo" className='w-[100px]' />
        <h1 className='text-secunday font-black text-3xl items-center'>Campeonato Copa da BR</h1>
      </div>

      {/* {
        allTeamsPlayers.map((teamplayer, key) => {
          return (
            <p key={key} className='bg-gray-400'>
              {teamplayer.name}
              {teamplayer.players.map((player, key) => {
                return (<p key={key} className='bg-white'>{player.name}</p>)
              })}
            </p>
          )
        })
      } */}
      <div className='flex justify-center items-center'>
        <h1 className='text-secundary font-bold text-2xl'>Pagina do Admin</h1>
      </div>
      <div className="flex justify-center items-center my-2">
        <button className="bg-red-600 w-20 h-10 text-white font-bold rounded-sm cursor-pointer hover:opacity-80 transition-all" onClick={logout}>Sair</button>

      </div>

      <div className='w-full bg-gray-100 flex flex-col justify-center items-center'>
        {
          allTeamsPlayers.map((teams, key) => {
            return (
              <div key={key}>
                <div className='bg-gray-400 w-full flex flex-row p-3 border-1 rounded-xs'>

                  <h1 className='text-secudary font-black mr-4'> Nome do Time {teams.name}</h1>
                  <h1 className='text-secudary font-black mr-4'> Cidade do Time {teams.city}</h1>
                  <h1 className='text-secudary font-black mr-4'> Treinador do Time {teams.couch}</h1>

                </div>
                {
                  teams.players.map((player, key) => {
                    return (
                      <div key={key} className='bg-white my-2 border-b-1 p-3'>
                        <h1 className='text-secudary font-bold'>NOME JOGADOR: {player.name}</h1>
                        <h1 className='text-secudary font-bold'>C.P.F: {player.cpf}</h1>
                        <h1 className='text-secudary font-bold'>RG: {player.rg}</h1>
                        <h1 className='text-secudary font-bold'>ENDEREÇO: {player.address}</h1>
                        <h1 className='text-secudary font-bold'>DATA DE NASC.: {moment(player.birthdate).format("DD/MM/YYYY")}</h1>
                        <h1 className='text-secudary font-bold'>NOME DA MÃE: {player.nameMother}</h1>
                        <h1 className='text-secudary font-bold'>NOME DO PAI: {player.nameFather}</h1>
                        <button
                          onClick={() => handleEdit(player.id, player.teamId)}
                          className='bg-blue-300 w-20 h-10 rounded-md font-black hover:opacity-85 transition-all cursor-pointer mx-1'>
                          EDITAR
                        </button>
                        <button
                          onClick={() => deletePlayer(player.id)}
                          className='bg-red-500 w-20 h-10 rounded-md text-white font-black hover:opacity-85 transition-all cursor-pointer mx-1'>
                          Excluir
                        </button>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>

    </div>
  )
}