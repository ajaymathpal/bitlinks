import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div> */}

      {/* <main className="relative z-10 text-white mix-blend-darken"> */}
      <main className="relative  z-10 text-white mix-blend-darken flex items-center justify-center">
        <section className=" h-[90.4vh]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl font-bold">The best URL shortener in the market</p>
            <p className="px-45 w-1/2 text-center">We are the most straight forward URL shortner in the world. Most of th URL shortener will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.</p>
            <div className='flex gap-4'>
              <Link href="/shorten">
                {/* <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button> */}
                <button className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-5 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                    Try Here
                  </span>
                </button>
              </Link>
              <Link href="/github">
                {/* <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button> */}
                <button className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-5 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                    GitHub
                  </span>
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-start relative">
            <Image className="-z-50 mix-blend-darken" src={"/vector.png"} alt="vector image" fill={true} />
          </div> */}
        </section>

      </main>
    </>
  );
}
