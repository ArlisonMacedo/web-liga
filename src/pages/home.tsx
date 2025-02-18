import logoImg from '../assets/copa-brasao.png';

export function Home() {
    return (
        <div className="w-screen h-screen justify-center bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="w-full bg-transparent flex">

                <img src={logoImg} alt="logo" className='w-30' />

            </div>
            <div className='w-full justify-center items-center flex'>
                <h1 className="text-yellow-600 text-6xl py-1 font-black font-roboto">Campeonato Copa da BR</h1>
            </div>
            <div className='justify-center flex mt-2.5'>
                <h1 className='bg-green-900 w-3xl p-5 text-white border-none rounded-2xl'>
                    O futebol não é apenas um jogo, é uma paixão que move montanhas. Cada passe,
                    cada drible, cada gol é uma chance de superar limites e provar que, com garra e determinação,
                    somos capazes de alcançar o impossível. Hoje, deixe seu coração em campo, jogue com alma e mostre que,
                    quando acreditamos em nós mesmos, não há adversário grande demais. Vamos em busca da vitória, porque o
                    sucesso pertence a quem ousa sonhar e luta por cada centímetro do campo!" ⚽💪🔥
                </h1>

            </div>
            <div className='flex justify-center mt-12 hover:opacity-90'>
                <button className='bg-yellow-600 text-white w-[200px] h-10 rounded-md'>
                    <p className='font-black'>CADASTRAR SEU TIME</p>
                </button>
            </div>

        </div>
    )
}