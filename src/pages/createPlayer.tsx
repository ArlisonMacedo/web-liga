import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import logoImg from '../assets/copa-brasao.png'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../service/api'

export function CreatePlayer() {
    const { teamId } = useParams()
    const [alert, setAlert] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        rg: '',
        address: '',
        birthdate: '',
        nameMother: '',
        nameFather: '',
        id: teamId

    })
    const navigate = useNavigate()


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // console.log(formData.id)
        try {
            const response = await api.post('players', formData)
            if (response.data.playerId) {
                setAlert(!alert)
            }
            navigate(`/dashboard/${teamId}`)
            setAlert(!alert)
        } catch (error) {
            console.log('Opaaa, Erro', error)
        }

    }
    return (
        <div className="w-screen h-screen bg-white">

            <div className='flex justify-center items-center'>
                <img src={logoImg} alt="logo" className='w-[150px]' />
                <h1 className='text-secunday font-black text-6xl items-center'>Campeonato Copa da BR</h1>
            </div>

            <div className="bg-gray-200 flex justify-center items-center w-full p-4">
                {alert && <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                    <p className="font-bold">Sucesso!</p>
                    <p>O atleta foi cadastro com sucesso.</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-black mb-3">Insira os dados</h1>
                    <div className="items-center">
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Nome do Jogador
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full text-secundary'
                            placeholder="Alan Rodrigues da Silva"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </div>

                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            CPF
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="00000000000"
                            id="cpf"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            RG
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="0000000000000"
                            id="rg"
                            name="rg"
                            value={formData.rg}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Endereço
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="Av. Dayse de Sousa, n°, Bairro Centro, Cidade Maracaçumé"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Data de Nasc.
                        </label>
                        <input type="date"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="00000000000"
                            id="birthdate"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Nome da Mãe
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="Maria Aparecida Sousa Silva"
                            id="nameMother"
                            name="nameMother"
                            value={formData.nameMother}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Nome do Pai
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="Jose Ribamar Sousa Silva"
                            id="nameFather"
                            name="nameFather"
                            value={formData.nameFather}
                            onChange={handleChange}

                        />
                    </div>

                    <button type="submit"
                        className="bg-blue-500 w-full text-white 
                            font-bold cursor-pointer hover:opacity-85 
                            transition-all duration-500 rounded-sm p-2 mt-4">
                        <p>Salvar</p>
                    </button>


                </form>
            </div>

        </div>
    )
}