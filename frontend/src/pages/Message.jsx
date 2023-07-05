/*
This code is a React component called "Message" that represents a messaging feature in a web application. It imports necessary dependencies, defines states and variables, and includes various useEffect hooks for handling API calls and real-time communication with a server using Socket.IO.

Let's go through the code step by step:
*/

// Import necessary dependencies and components
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import ConversationCard from "../components/cards/ConversationCard";
import SendMessageInput from "../components/inputs/SendMessageInput";
import SendMessageHeader from "../components/SendMessageHeader";
import MessageCard from "../components/cards/MessageBox";
import Lottie from "react-lottie";
import typingAnimation from "../assets/Typing_Guy.json";

import { io } from "socket.io-client";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: typingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Message = () => {
  // Use the AppContext to access user and port information
  const { user, port } = useContext(AppContext);

  // Define state variables
  const [conversations, setConversations] = useState([]);
  const [currentConversationFriendId, setCurrentConversationsFriendId] =
    useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [receiverId, setReceiverId] = useState();
  const ENDPOINET = port;
  const [isTyping, setIsTyping] = useState(false);

  const socket = useRef();

  // Create a reference for scrolling to the latest message
  const scrollRef = useRef();

  // Create a socket reference for real-time communication
  useEffect(() => {
    socket.current = io(ENDPOINET);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });

    socket.current.on("typing", (data) => {
      setIsTyping(data.typing);
    });
  }, [ENDPOINET]);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (receiverId) {
        socket.current.emit("isTyping", {
          receiverId,
          typing: false,
        });

        console.log("User has stopped typing");
      }
    }, 1000); // Adjust the timeout value as needed

    return () => clearTimeout(typingTimer);
  }, [newMessage]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // useEffect hook to add the user to the socket connection and listen for user updates
  useEffect(() => {
    socket.current.emit("addUser", user.userId);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [user.userId]);

  // useEffect hook to fetch conversations when the user ID changes
  useEffect(() => {
    const apiEndPoint = `${port}/api/v1/conversation/${user.userId}`;
    axios
      .get(apiEndPoint)
      .then((response) => {
        console.log(response.data.data);
        setConversations(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.userId]);

  // useEffect hook to fetch messages when the current chat changes
  useEffect(() => {
    const apiEndPoint = `${port}/api/v1/messages/${currentChat?._id}`;
    axios
      .get(apiEndPoint)
      .then((response) => {
        console.log(response.data);
        setMessages(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentChat]);

  // Handle input change for the new message
  const handleChange = (e) => {
    const value = e.target.value;
    setNewMessage(value);

    socket.current.emit("isTyping", {
      receiverId,
      typing: true,
    });
  };

  // Handle form submission for sending a new message
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiEndPoint = `${port}/api/v1/messages`;

    const message = {
      text: newMessage,
      sender: user.userId,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user.userId
    );

    socket.current.emit("sendMessage", {
      senderId: user.userId,
      receiverId,
      text: newMessage,
    });

    axios
      .post(apiEndPoint, message)
      .then((response) => {
        console.log(response.data);
        setMessages([...messages, response.data.data]);
        setNewMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect hook to scroll to the latest message whenever the messages change
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Render the messaging interface
  return (
    <div className="h-screen w-full flex antialiased text-gray-800 bg-white overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <section className="flex flex-col flex-none overflow-auto w-[60px] lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            {/* Left sidebar */}
            <div className="header p-4 flex flex-row justify-between items-center flex-none">
              {/* Header content */}
              <p className="text-md font-bold hidden md:block">Messenges</p>
              <a
                href="#"
                className="block rounded-full hover:bg-gray-200 bg-gray-100 w-10 h-10 p-2"
              >
                {/* SVG icon */}
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                </svg>
              </a>
            </div>

            {/* Search box */}
            <div className="search-box p-4 flex-none">
              <form onSubmit="">
                <div className="relative">
                  <label>
                    <input
                      className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none text-gray-600 focus:shadow-md transition duration-300 ease-in"
                      type="text"
                      value=""
                      placeholder="Search Messenger"
                    />
                    <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                      {/* Search icon */}
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path
                          fill="#bbb"
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </form>
            </div>

            {/* List of conversations */}
            <div className="contacts p-2 flex-1 overflow-y-scroll">
              {conversations.map((conversation, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const friendId = conversation.members.find(
                      (m) => m !== user.userId
                    );
                    setReceiverId(friendId);
                    setCurrentChat(conversation);
                    setCurrentConversationsFriendId(friendId);
                  }}
                >
                  <ConversationCard
                    conversation={conversation}
                    currentUser={user}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col flex-auto border-l">
            {/* Right chat area */}
            {currentChat ? (
              <>
                {/* Header for the current chat */}
                <SendMessageHeader
                  currentUserId={currentConversationFriendId}
                />

                {/* Messages */}
                <div className="w-full flex-1 overflow-y-scroll overflow-x-hidden h-full p-3">
                  {messages.map((m, index) => (
                    <div key={index} ref={scrollRef}>
                      <MessageCard message={m} own={m.sender === user.userId} />
                    </div>
                  ))}
                  {isTyping && (
                    <div className="w-[50px]">
                      <Lottie options={defaultOptions} height={50} width={50} />
                    </div>
                  )}
                </div>

                {/* Input form for sending messages */}
                <form className="">
                  <SendMessageInput
                    handleSubmit={handleSubmit}
                    value={newMessage}
                    onChange={handleChange}
                  />
                </form>
              </>
            ) : (
              <div className="w-full h-full flex-1 grid place-content-center p-3">
                {/* Placeholder message when no conversation is selected */}
                <h3 className="font-medium text-lg text-gray-200 text-center md:text-2xl">
                  Open a conversation to start a chat
                </h3>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Message;
