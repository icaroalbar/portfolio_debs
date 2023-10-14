import Link from "next/link";
import { BiLeftArrowAlt } from 'react-icons/bi';
import Image from 'next/image'

interface ImagePageProps {
    title: string;
    description: string;
    type: string;
    local: string;
    folder: string;
    SlideTotal: number;
    back: string
}

export const ImagePage = ({
    title,
    description,
    type,
    local,
    folder,
    SlideTotal,
    back
}: ImagePageProps) => {
  return (
    <div className="px-10 lg:px-16 pb-10">
      <div className="inline-block">
      <Link href={`/portfolio/${back}`} className="bg-secondary-10 text-white font-medium rounded-md px-5 py-1 transition-colors hover:bg-secondary-20 flex gap-x-1 items-center"><BiLeftArrowAlt />Voltar</Link>
      </div>
      <h1 className="text-3xl font-semibold text-blue-10 mt-6 text-center md:text-start">{title}</h1>
      <p className="font-light text-white text-lg text-justify my-3">{description}</p>
      <ul className="flex gap-x-5 mb-5">
        <li>
          <label className="font-medium text-blue-10">Tipo de projeto</label>
          <p className="font-light text-white">{type}</p>
        </li>
        <li>
          <label className="font-medium text-blue-10">Local</label>
          <p className="font-light text-white">{local}</p>
        </li>
      </ul>
      <div className="flex gap-5 flex-wrap">
        {
          (function() {
            const images = [];
            for (let i = 1; i <= SlideTotal; i++) {
              images.push(
                <Image
                  key={i}
                  src={`/${folder}/Slide${i}.png`}
                  width={350}
                  height={350}
                  alt={`Foto de Deborah Moreira - Slide ${i}`}
                />
              );
            }
            return images;
          })()
        }
      </div>

    </div>
  )
}
