
import { useState } from 'react';
import logoImg from '../assets/copa-brasao.png';
import api from '../service/api';
import { useNavigate } from 'react-router-dom';

export function Login() {


    const [formData, setFormData] = useState({
        cpf: '',
    })

    const SuperUser = '07368342308'

    const navigate = useNavigate()

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (formData.cpf === SuperUser) {
            console.log('CHEGUEI AQUI SUPER')
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/dashboardowner')
        } else {


            api.post('/login', formData).then(response => {
                // console.log(response.data)

                const user = formData.cpf === response.data.cpf
                if (user) {
                    localStorage.setItem('isAuthenticated', 'true')
                    localStorage.setItem('id', response.data.id)
                    navigate(`/dashboard/${response.data.id}`)
                }
            })
        }
    };

    return (
        <div className="w-screen h-screen bg-white">
            <div className='flex justify-center items-center'>
                <img src={logoImg} alt="logo" className='w-[150px]' />
                <h1 className='text-secunday font-black text-6xl items-center'>Campeonato Copa da BR</h1>
            </div>

            <div className='flex flex-col items-center justify-self-auto bg-gray-200 h-96 p-4'>
                <h1 className='text-secundary font-black text-3xl'>Entre com os Dados</h1>
                <br />
                <div className='flex justify-center items-center'>

                    <form onSubmit={handleSubmit}>
                        <div className='flex items-center justify-between'>

                            <label htmlFor="cpf" className='text-secundary font-black text-xl mr-6'>CPF</label>
                            <input
                                placeholder='0000000000'
                                className='bg-white font-bold p-3 border-secundary border rounded h-10 w-full focus:none'
                                type='text'
                                id="cpf"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                            />
                        </div>
                        <br />


                        <button type="submit"
                            className="bg-blue-500 w-full text-white 
                            font-bold cursor-pointer hover:opacity-85 
                            transition-all duration-500 rounded-sm p-2 mt-4">
                            <p>Entrar</p>
                        </button>
                    </form>
                </div>

            </div>
        </div>






    )
}