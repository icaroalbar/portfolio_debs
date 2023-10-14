import Image from 'next/image'
import { FaRegEnvelope, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
    return(
        <footer className="bg-zinc-800 pt-5">
            <div className="grid grid-cols-2 sm:w-4/5 mx-auto gap-x-2">
                <div className="col-span-1 flex items-center justify-center">
                    <div className='flex items-center justify-center gap-x-2'>
                        <Image
                        src="/logo.png"
                        width={20}
                        height={20}
                        alt="Foto de Deborah Moreira"
                        /><h1 className="text-primary-10 font-bold text-lg">Deborah Moreira</h1>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center">
                    <ul>
                        <li className='flex gap-x-2 items-center text-blue-10'><FaRegEnvelope /> dsm.deborah@gmail.com</li>
                        <li className='flex gap-x-2 items-center text-blue-10 hover:text-blue-20 transition-colors'><FaLinkedinIn />
                            <a href="https://www.linkedin.com/in/deborahsmoreira/" target='_blank'>Deborah Moreira</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-5"><p className="text-primary-10 text-sm">&copy; Deborah Moreira {new Date().getFullYear()} - Todos os direitos reservados</p></div>
        </footer>
    )
}