import { motion as m } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

const Toast = () => {
  const { showToast, setShowToast, toast } = useContext(AppContext);
  const [iconStatus, setIconStatus] = useState('');
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 5000);

    switch (toast.status) {
      case 'error':
        setIconStatus('text-red-500 bg-red-100');
        break;
      case 'success':
        setIconStatus('text-green-500 bg-green-100');
        break;
      case 'warning':
        setIconStatus('ttext-orange-500 bg-orange-100');
        break;

      default:
        break;
    }

    // const container = divRef.current;
    // container.addEventListener('mouseenter', () => {
    //   clearInterval(inter);
    //   setTimeCount(4);
    // });

    // container.addEventListener('mouseleave', () => {
    //   let inter = setInterval(() => {
    //     setTimeCount(-1);
    //     if (timeCount <= 0) {
    //       setShowToast(false);
    //       clearInterval(inter);
    //       setTimeCount(4);
    //     }
    //   }, 2000);
    // });
  }, [showToast]);
  return (
    <m.div
      ref={divRef}
      initial={{ y: -100 }}
      animate={{ y: showToast ? 60 : -100 }}
      transition={{
        duration: 2,
        type: 'tween',
        ease: 'backOut',
      }}
      className={`block z-[900000000000000] top-0 absolute`}
    >
      {/* {children} */}
      <div
        id='toast-success'
        className='flex flex-col w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
        role='alert'
      >
        <div className='w-full flex items-center'>
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${iconStatus} rounded-lg dark:bg-green-800 dark:text-green-200`}
          >
            {toast.icon}
            <span className='sr-only'>Check icon</span>
          </div>
          <div className='ml-3 text-sm font-normal'>{toast.text}</div>
          <button
            onClick={() => setShowToast(false)}
            type='button'
            className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
            data-dismiss-target='#toast-success'
            aria-label='Close'
          >
            <span className='sr-only'>Close</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        {/* <h1 className='w-full text-r'>1s</h1> */}
      </div>
    </m.div>
  );
};

export default Toast;
