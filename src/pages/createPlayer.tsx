import { useState } from 'react'
import logoImg from '../assets/copa-brasao.png'

export function CreatePlayer() {

    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        rg: '',
        address: '',
        birthdate: '',
        nameMother: '',
        nameFather: ''

    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Dados do formulario', formData)
    }
    return (
        <div className="w-screen h-screen bg-white">

            <div className='flex justify-center items-center'>
                <img src={logoImg} alt="logo" className='w-[150px]' />
                <h1 className='text-secunday font-black text-6xl items-center'>Campeonato Copa da BR</h1>
            </div>

            <div className="bg-gray-200 flex justify-center items-center w-full p-4">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-black mb-3">Insira os dados.</h1>
                    <div className="items-center">
                        <label htmlFor=""
                            className='text-secundary font-black text-xl mr-6'
                        >
                            Nome do Jogador
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full text-secundary'
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
                            CPF
                        </label>
                        <input type="text"
                            className='p-3 border-secundary border rounded h-10 w-full focus:none text-secundary'
                            placeholder="Maracaçumé"
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
                            placeholder="José Antonio Silva"
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
                            placeholder="00000000000"
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
                            placeholder="00000000000"
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
                            placeholder="00000000000"
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