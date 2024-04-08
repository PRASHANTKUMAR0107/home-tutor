import Image from "next/image";
import Link from "next/link";
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'

import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
  Target,
} from 'lucide-react'

export default function Home() {

  const perks = [
    {
      name: 'One Quality',
      Icon: ArrowDownToLine,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius blanditiis perferendis, nemo consequatur beatae facilis eaque nulla veniam ab quia accusantium iure, alias dolorum voluptatibus soluta corporis? Nobis, et quo?',
    },
    {
      name: 'Two Quality',
      Icon: ArrowDownToLine,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius blanditiis perferendis, nemo consequatur beatae facilis eaque nulla veniam ab quia accusantium iure, alias dolorum voluptatibus soluta corporis? Nobis, et quo?',
    },
    {
      name: 'Three Quality',
      Icon: ArrowDownToLine,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius blanditiis perferendis, nemo consequatur beatae facilis eaque nulla veniam ab quia accusantium iure, alias dolorum voluptatibus soluta corporis? Nobis, et quo?',
    },
  ]


  return (
          <>
        <div className="">
          <div className='lg:bg-[url("/media/bht_banner.png")] bg-[url("/media/mobilehero.jpg")]  bg-cover bg-no-repeat lg:bg-contain lg:bg-right-bottom'>
            <div className='lg:min-h-[90vh] lg:py-40 py-24 lg:px-60 md:px-24 px-6 bg-cover lg:backdrop-blur-none backdrop-blur-sm'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-w-2xl'>
                Your home tution for high-quality{' '}
                  <span className='text-green-600'>
                  study lorems
                  </span>
                  .
              </h1>
              <p className='mt-6 text-lg text-muted-foreground max-w-lg'>
                Welcome to home_tution. Every tutor on our
                platform is verified by our team to ensure our
                highest quality standards.
              </p>
              <div className='mt-6 text-lg max-w-xl bg-gray-100/50 p-5 rounded-xl text-gray-800'>
                <Link href={'https://forms.gle/9CyijoguGUuWeLs9A'} target={'_blank'}>
                  Book your class right now by calling on 0000000000 &ensp; &rarr;
                </Link>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                <Link
                  href={'https://forms.gle/9CyijoguGUuWeLs9A'} target={'_blank'}
                  className={buttonVariants()}>
                  Or Request a Tutor
                </Link>
                <Button variant='ghost'>
                  <Link href={'https://forms.gle/mKsQApGzWq4uiWsD9'} target={'_blank'}>
                  Register as a Tutor &rarr;
                  </Link>
                </Button>
              </div>
              
            </div>

            {/* <div className="">
              <Image src={'/media/bht_banner.png'} fill alt="" className="object-contain bottom-0"></Image>
            </div> */}
          </div>


      <section className='border-t border-gray-200 bg-gray-100/50 backdrop-blur-md lg:px-60 md:px-24 px-6'>
        <div className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
