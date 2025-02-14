import logoImg from '../assets/copa-brasao.png';

export function Home() {
    return (
        <div className="w-screen h-screen justify-center bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="w-full bg-transparent flex">

                <img src={logoImg} alt="logo" className='w-24' />

                <h1 className="text-gray-300 text-4xl py-1 font-black font-roboto">Campeonato Copa da BR</h1>
            </div>

        </div>
    )
}