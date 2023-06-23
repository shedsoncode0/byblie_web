import React from 'react'

const Message = () => {
  return (

<div className="h-screen w-full flex antialiased text-gray-800 bg-white overflow-hidden">
<div className="flex-1 flex flex-col">

    <main className="flex-grow flex flex-row min-h-0">
        <section className="flex flex-col flex-none overflow-auto w-24 lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            <div className="header p-4 flex flex-row justify-between items-center flex-none">
                
                <p className="text-md font-bold hidden md:block">Messenges</p>
                <a href="#" className="block rounded-full hover:bg-gray-200 bg-gray-100 w-10 h-10 p-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                                d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"/>
                    </svg>
                </a>
            </div>
            <div className="search-box p-4 flex-none">
                <form onSubmit="">
                    <div className="relative">
                        <label>
                            <input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none text-gray-600 focus:shadow-md transition duration-300 ease-in"
                                   type="text" value="" placeholder="Search Messenger"/>
                            <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                <svg viewBox="0 0 24 24" className="w-6 h-6">
                                    <path fill="#bbb"
                                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                                </svg>
                            </span>
                        </label>
                    </div>
                </form>
            </div>
            
            <div className="contacts p-2 flex-1 overflow-y-scroll">
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/61.jpg"
                             alt=""
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Angelina Jolie</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">Ok, see you at the subway in a bit.</p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">Just now</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/97.jpg"
                             alt=""
                        />
                        <div className="absolute bg-white p-1 rounded-full bottom-0 right-0">
                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p className="font-bold">Tony Stark</p>
                        <div className="flex items-center text-sm font-bold">
                            <div className="min-w-0">
                                <p className="truncate">Hey, Are you there?</p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">10min</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block"></div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/33.jpg"
                             alt=""
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Scarlett Johansson</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">You sent a photo.</p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">1h</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/12.jpg"
                             alt=""
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>John Snow</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">You missed a call John.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">4h</p>
                        </div>
                    </div>
                  <div className="bg-blue-500 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block"></div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/23.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Emma Watson</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">You sent a video.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">11 Feb</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block">
                        <img className="rounded-full w-full h-full object-cover" alt="user2"
                             src="https://randomuser.me/api/portraits/women/23.jpg"/>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/87.jpg"
                             alt="User2"
                        />
                        <div className="absolute bg-white p-1 rounded-full bottom-0 right-0">
                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Sunny Leone</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">Ah, it was an awesome one night stand.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">1 Feb</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/45.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Bruce Lee</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">You are a great human being.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block">
                        <img className="rounded-full w-full h-full object-cover" alt="user2"
                             src="https://randomuser.me/api/portraits/men/45.jpg"/>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
                             src="https://randomuser.me/api/portraits/men/22.jpg"
                             alt="User2"
                        />
                        <img className="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                             src="https://randomuser.me/api/portraits/men/55.jpg"
                             alt="User2"
                        />
                        <div className="absolute bg-white p-1 rounded-full bottom-0 right-0">
                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>TailwindCSS Group</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">Adam: Hurray, Version 2 is out now!!.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/34.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Will Smith</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">WTF dude!! absofuckingloutely.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">13 Dec</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/22.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Brad Pitt</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">you called Brad.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/99.jpg"
                             alt="User2"
                        />
                        <div className="absolute bg-white p-1 rounded-full bottom-0 right-0">
                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Tom Hanks</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">Tom called you.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/41.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Dwayne Johnson</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">How can i forget about that man!.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">12 Nov</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block">
                        <img className="rounded-full w-full h-full object-cover" alt="user2"
                             src="https://randomuser.me/api/portraits/men/41.jpg"/>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/70.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Johnny Depp</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">Alright! lets catchup tomorrow!.
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">4 Nov</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/20.jpg"
                             alt="User2"
                        />
                        <div className="absolute bg-white p-1 rounded-full bottom-0 right-0">
                            <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Leonardo Dicaprio</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">How can you leave Rose dude. I hate you!
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">26 Oct</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/men/32.jpg"
                             alt="User2"
                        />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
                        <p>Tom Cruise</p>
                        <div className="flex items-center text-sm text-gray-600">
                            <div className="min-w-0">
                                <p className="truncate">Happy birthday to you my friend!
                                </p>
                            </div>
                            <p className="ml-2 whitespace-no-wrap">2 Oct</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block">
                        <img className="rounded-full w-full h-full object-cover" alt="user2"
                             src="https://randomuser.me/api/portraits/men/32.jpg"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col flex-auto border-l">
            <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                <div className="flex">
                    <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/33.jpg"
                             alt=""
                        />
                    </div>
                    <div className="text-sm">
                        <p className="font-bold">Scarlett Johansson</p>
                        <p>Active 1h ago</p>
                    </div>
                </div>

                <div className="flex">
                    
                    <a href="#" className="block rounded-full hover:bg-gray-200 bg-gray-100 w-10 h-10 p-2 ml-4">
                        <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-600">
                            <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z"/>
                        </svg>

                    </a>
                </div>
            </div>
            <div className="chat-body p-4 flex-1 overflow-y-scroll">
                <div className="flex flex-row justify-start">
                    <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/33.jpg"
                             alt=""
                        />
                    </div>
                    <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                        <div className="flex items-center group">
                            <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">Hey! How are you?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center group">
                            <p className="px-6 py-3 rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center group">
                            <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">Lorem ipsum
                                dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div><p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
                <div className="flex flex-row justify-end">
                    <div className="messages text-sm text-white grid grid-flow-row gap-2">
                        <div className="flex items-center flex-row-reverse group">
                            <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">Hey! How are you?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center flex-row-reverse group">
                            <p className="px-6 py-3 rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center flex-row-reverse group">
                            <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">Lorem ipsum
                                dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div><p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
                <div className="flex flex-row justify-start">
                    <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/33.jpg"
                             alt=""
                        />
                    </div>
                    <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                        <div className="flex items-center group">
                            <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">Hey! How are you?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center group">
                            <p className="px-6 py-3 rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center group">
                            <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-100 max-w-xs lg:max-w-md">Lorem ipsum
                                dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div><p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
                <div className="flex flex-row justify-end">
                    <div className="messages text-sm text-white grid grid-flow-row gap-2">
                        <div className="flex items-center flex-row-reverse group">
                            <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">Hey! How are you?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center flex-row-reverse group">
                            <p className="px-6 py-3 rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">Shall we go for Hiking this weekend?</p>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center flex-row-reverse group">
                            <a className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                                <img className="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking"/>
                            </a>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
 M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                    <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z"/>
                                </svg>
                            </button>
                            <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200 bg-gray-100 w-8 h-8 p-2">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center flex-row-reverse group">
                            <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-500 max-w-xs lg:max-w-md">Lorem ipsum
                                dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
            <form>
    <div className="flex items-center px-3 py-2 rounded-lg">
        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Upload image</span>
        </button>
        <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Add emoji</span>
        </button>
        <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span className="sr-only">Send message</span>
        </button>
    </div>
</form>
        </section>
    </main>
</div>
</div>
  )
}

export default Message