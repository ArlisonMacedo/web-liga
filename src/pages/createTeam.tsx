
import { FormEvent, useState } from "react"
import logoImg from "../assets/copa-brasao.png"
import api from "../service/api"
import { useNavigate } from 'react-router-dom'

export function CreateTeam() {


    const [formData, setFormData] = useState({
        name: '',
        city: '',
        couch: '',
        cpf: ''
    })
    const [isClicked, setClicked] = useState(false)
    const navigate = useNavigate()



    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setClicked(true)
        await api.post('teams', formData)
        setClicked(false)
        navigate('/login')


    }

    // useEffect(() => {
    //     navigate(`/createplayer/${id}`)
    // }, [handleSubmit])

    return (
        <div className="w-screen h-screen bg-white">
            <div className='flex justify-center items-center'>
                <img src={logoImg} alt="logo" className='w-[150px]' />
                <h1 className='text-secunday font-black text-4xl items-center'>Campeonato Copa da BR</h1>
            </div>
            <div className="bg-gray-200 flex justify-center items-center w-full p-6">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-black mb-3">Insira os dados.</h1>
                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Nome do Time
                        </label>
                        <input type="text"
                            className='bg-white font-bold p-3 border-secundary border rounded h-10 w-full text-secundary'
                            placeholder="Barcelona FC"
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
                            Cidade do Time
                        </label>
                        <input type="text"
                            className='bg-white font-bold p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="Maracaçumé"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Nome do Técnico
                        </label>
                        <input type="text"
                            className='bg-white font-bold p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="José Antonio Silva"
                            id="couch"
                            name="couch"
                            value={formData.couch}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            CPF do Técnico
                        </label>
                        <input
                            type="text"
                            className='bg-white font-bold p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="00000000000"
                            id="cpf"
                            name="cpf"
                            // mask="999.999.999-99"
                            value={formData.cpf}
                            onChange={handleChange}

                        />
                    </div>
                    {
                        isClicked ? (
                            <button type="reset"
                                className="bg-blue-200 w-full text-white 
                            font-bold cursor-pointer hover:opacity-85 
                            transition-all duration-500 rounded-sm p-2 mt-4 
                            ">
                                <div className='flex justify-center items-center'>
                                    <p className='animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900'></p>
                                </div>
                            </button>
                        ) :
                            <button type="submit"
                                className="bg-blue-500 w-full text-white 
                            font-bold cursor-pointer hover:opacity-85 
                            transition-all duration-500 rounded-sm p-2 mt-4">
                                <p>Salvar</p>
                            </button>
                    }


                </form>
            </div>

        </div>
    )
}