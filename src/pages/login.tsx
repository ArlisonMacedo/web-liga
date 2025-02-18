
import { useState } from 'react';
import logoImg from '../assets/copa-brasao.png';

export function Login() {

    const [formData, setFormData] = useState({
        cpf: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div className="w-screen h-screen bg-white">
            <div className='flex justify-center items-center'>
                <img src={logoImg} alt="logo" className='w-[150px]' />
                <h1 className='text-secunday font-black text-6xl items-center'>Campeonato Copa da BR</h1>
            </div>

            <div className='flex flex-col w-[50%] items-center justify-center'>
                <h1 className='text-secundary'>Entre com os Dados</h1>
                <form>
                    <label htmlFor="">CPF</label>
                    <input
                        type='text'
                        id="cpf"
                        name="cpf"
                        value={FormData.cpf}

                    />
                </form>
            </div>
        </div>
    )
}