const Hero = () => {
  return (
    <div className="w-full h-full">
      <section className='bg-[#141521] border-b border-white/5 overflow-hidden relative'>
        <div className='relative w-ful'>
          <div className='relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6'>
            <div className='flex flex-row items-center justify-between text-sm text-white lg:justify-start'>
              <a href='/'>
                <div>
                  <p>Windstatic</p>
                </div>
              </a>
              <button className='inline-flex items-center justify-center p-2 text-white focus:outline-none focus:text-black hover:text-black md:hidden'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='inline-flex'
                    d='M4 6h16M4 12h16M4 18h16'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  ></path>
                  <path
                    className='hidden'
                    d='M6 18L18 6M6 6l12 12'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  ></path>
                </svg>
              </button>
            </div>
            <nav className='flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0'>
              <a
                href='#'
                className='px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto'
              >
                Challenge
              </a>
              <a
                href='#'
                className='px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3'
              >
                Leaderboard
              </a>
              <a
                href='#'
                className='px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3'
              >
                Learn
              </a>
              <div className='inline-flex items-center gap-2 list-none lg:ml-auto'>
                <button className='block px-4 py-2 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0'>
                  Sign in
                </button>
                <button className='text-white text-sm py-2 focus:outline-none px-4 active:bg-fuchsia-50 active:text-#279f0e bg-white/5 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 group hover:bg-white/5 inline-flex items-center justify-center rounded-xl'>
                  Sign up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <section className='items-center justify-center bg-[#141521] flex h-screen'>
        <div className='relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12'>
          <div className='max-w-3xl mx-auto text-center'>
            <div>
              <span className='w-auto px-6 py-3 rounded-full bg-white/5'>
                <span className='tewxt-sm font-medium text-[#50d236]'>
                  Acquire your first customer
                </span>
              </span>
              <p className='mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl'>
                Create landing pages
                <span className='md:block'>your audience will love</span>
              </p>
              <p className='max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300'>
                Effortlessly create, pitch, and validate your early-stage
                business with our no-code landing page builder.
              </p>
            </div>
            <div className='flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row'>
              <a
                href='#'
                className='text-white focus:outline-none inline-flex items-center justify-center rounded-xl bg-[#279f0e] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 text-center w-full'
              >
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
