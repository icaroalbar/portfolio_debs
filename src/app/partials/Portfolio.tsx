import Link from 'next/link';
import { data } from './data';

export default function Portfolio() {
  return (
    <div className='pb-16'>
      <div className='text-center py-10 px-5 md:w-2/3 mx-auto'>
        <h2 className='text-primary-10 text-4xl font-semibold mb-2'>Projetos</h2>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia ab eaque aliquid laborum suscipit ipsum vel hic harum accusantium tempora iure modi enim rerum quas a quae, corrupti impedit!
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-5 px-24">
        {data.map((item, index) => (
          <div key={index} className='border-2 py-5 justify-between border-secondary-10 p-3 text-center flex flex-col gap-y-5 rounded-lg'>
            <h3 className='uppercase font-medium text-lg text-[#404040] bg-primary-10'>{item.title}</h3>
            <p className='text-white'>{item.resume}

            </p>
            <Link href={`/portfolio/${item.href}`}
              className='text-white font-medium bg-secondary-10 hover:bg-secondary-20 transition-colors py-2 rounded-xl'>
                Saiba mais            
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
