import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image'

const data = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'portfólio',
    href: '#',
  }
]

export default function Nav() {
    return (
        <div className="h-28 flex items-center px-8 justify-between">
          <Link href={'/'} className='flex items-center justify-center gap-x-2'>
            <Image
              src="/logo.png"
              width={20}
              height={20}
              alt="Foto de Deborah Moreira"
            /><h1 className="text-primary-10 font-bold md:text-3xl">Deborah Moreira</h1>
          </Link>
          <ul className="flex text-primary-10 capitalize gap-x-5 items-center">
          {data.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className={`hover:underline hover:underline-offset-4 transition-colors font-medium`}>
              {item.label}
            </Link>
          </li>
          ))}
          <li>
            <Link href='#' target='_blank' className={`hover:text-primary-20 transition-colors font-medium text-xl`}>
              <FaLinkedinIn/>
            </Link>
          </li>
          </ul>
        </div>
    )
  }
  