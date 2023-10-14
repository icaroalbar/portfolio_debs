import Link from "next/link";
import { BiLeftArrowAlt } from 'react-icons/bi';
import Image from 'next/image'
import { data } from "./data";

export default function GestaoDeCarreiras() {
  return (
    <div className="px-10 lg:px-16">
      <div className="inline-block">
      <Link href={'/'} className="bg-secondary-10 text-white font-medium rounded-md px-5 py-1 transition-colors hover:bg-secondary-20 flex gap-x-1 items-center"><BiLeftArrowAlt />Voltar</Link>
      </div>
      <h1 className="text-3xl font-semibold text-blue-10 mt-6 text-center md:text-start">Gestao de carreiras</h1>

      {data.map((item, index) => (
        <Link href={`/${item.link}`} key={index}>
          <div  className="hover:bg-zinc-600/90 transition-colors duration-600 rounded-lg">
        <div className="grid grid-cols-3 gap-x-5 border-2 border-primary-10 px-3 py-8 rounded-lg my-3">
          <div className="col-span-3 lg:col-span-1 flex justify-center lg:justify-end">
          <Image
            src={`/images/${item.image}`}
            width={300}
            height={300}
            alt="Foto de Deborah Moreira"
          />
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-y-3 justify-center text-white">
            <h3 className="text-2xl text-center lg:text-start mt-3 font-medium underline underline-offset-8 decoration-blue-10">{item.title}</h3>
            <p className="font-light text-lg text-justify">{item.description}</p>
            <ul className="flex gap-x-5">
              <li>
                <label className="font-medium text-blue-10">Tipo de projeto</label>
                <p className="font-light">{item.type}</p>
              </li>
              <li>
                <label className="font-medium text-blue-10">Local</label>
                <p className="font-light">{item.local}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </Link>
      ))}
    </div>
  )
}
