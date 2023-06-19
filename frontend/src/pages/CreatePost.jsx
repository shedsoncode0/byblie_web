const CreatePost = () => {
  return (
    // <!-- Main modal -->
    <div className='relative p-4 w-full h-full justify-center flex flex-1  md:h-auto'>
      {/* <!-- Modal content --> */}
      <div className='relative w-full max-w-2xl p-4 bg-white dark:bg-gray-800 sm:p-5'>
        {/* <!-- Modal header --> */}

        {/* <!-- Modal body --> */}
        <form action='#'>
          <div className='flex flex-col gap-4 mb-4'>
            <div>
              <label
                htmlFor='title'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Title
              </label>
              <input
                type='text'
                name='title'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Add title here'
                required=''
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Description
              </label>
              <textarea
                id='description'
                rows='4'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Write your description here'
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between">

          <button
            type='submit'
            className='text-gray-400 border-[1px] border-gray-300 inline-flex items-center hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Discard
          </button>
          <button
            type='submit'
            className='text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Create post
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
