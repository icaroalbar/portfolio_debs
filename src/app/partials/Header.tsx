import Image from 'next/image'

export default function Header() {
    return (
        <div className="grid grid-cols-2 border-b-4 border-secondary-10 ">
          <div className='col-span-2 px-8 lg-px-0 lg:col-span-1 mx-auto'>
            <Image
              src="/perfil.png"
              width={600}
              height={500}
              alt="Foto de Deborah Moreira"
            />
          </div>
          <div className="flex bg-slate justify-center col-span-2 lg:col-span-1 items-cente py-8 sm:py-24">
            <div className=" text-white px-8 lg:px-0 lg:w-2/3 mx-auto flex flex-col">
              <h1 className="uppercase font-bold text-5xl sm:text-7xl text-center">deborah moreira</h1>
              <div className='border-t-4 mt-3 py-2 border-secondary-10'>
                <p className='bg-primary-10 text-sm py-1 text-slate-800 uppercase font-medium text-center text-[15.5px]'>Gestão de projetos ágeis</p>
              </div>
              <div className="flex flex-col mt-10 gap-y-8 text-lg">
                <p className='text-center italic font-light'>Minha paixão é atuar com inovação no setor público. </p>
                <p className='text-justify'>Minha missão é promover e facilitar a execução de projetos que auxiliem a construção de Políticas Públicas mais equânimes para efetivar e garantir qualidade de vida para toda a população.</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
  
