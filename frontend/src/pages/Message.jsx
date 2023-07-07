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
import SearchInput from "../components/inputs/SearchInput";

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
  const { user, port, io, socket, isTyping, setIsTyping } =
    useContext(AppContext);

  // Define state variables
  const [conversations, setConversations] = useState([]);
  const [currentConversationFriendId, setCurrentConversationsFriendId] =
    useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [receiverId, setReceiverId] = useState();
  const [collaps, setCollaps] = useState(false);
  const ENDPOINET = port;

  // Create a reference for scrolling to the latest message
  const scrollRef = useRef();
  const scrollRef2 = useRef();

  // Create a socket reference for real-time communication
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [ENDPOINET]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // useEffect hook to add the user to the socket connection and listen for user updates
  useEffect(() => {
    socket.current.emit("addUser", user.userId);
    socket.current.on("getUsers", (users) => {
      setConnectedUsers(users);
    });
  }, [user.userId, socket]);

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

  // When User is typing
  useEffect(() => {
    socket.current.on("typing", (data) => {
      setIsTyping(data.typing);
    });
  }, []);

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
    if (receiverId) {
      socket.current.emit("isTyping", {
        receiverId,
        typing: true,
      });
    }
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
    // scrollRef2.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, newMessage]);

  // Render the messaging interface
  return (
    <div className="h-screen w-full flex antialiased text-gray-800 bg-white overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <section
            className={`flex overflow-x-hidden relative flex-col flex-none overflow-auto  transition-all duration-300 ease-in-out ${
              collaps ? "w-[70px]" : "w-[300px]"
            } `}
          >
            {/* Left sidebar */}
            <div
              className={`flex items-center px-2 ${
                collaps ? "w-[70px]" : "w-[300px]"
              } relative h-[73px]`}
            >
              {/* Header content */}
              <p
                className={`text-md font-bold ${collaps ? "hidden" : "block"} `}
              >
                Messenges
              </p>

              <button
                onClick={() => setCollaps(!collaps)}
                className="absolute outline-none z-50 right-5   p-1 rounded-full"
              >
                {collaps ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Search box */}
            <div onClick={() => setCollaps(false)} className="p-3">
              <SearchInput />
            </div>

            {/* List of conversations */}
            <div className="contacts scrollbar overflow-x-hidden p-2 flex-1 overflow-y-scroll">
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
                    connectedUsers={connectedUsers}
                    newMessage={newMessage}
                    collaps={collaps}
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
                <div className="w-full relative overflow-y-scroll overflow-x-hidden h-full p-3">
                  {messages.map((m, index) => (
                    <div key={index}>
                      <MessageCard message={m} own={m.sender === user.userId} />
                    </div>
                  ))}

                  <div
                    ref={scrollRef}
                    className={`w-[50px] ${
                      isTyping ? "opacity-100" : "opacity-0"
                    }  p-2  bottom-16 text-black`}
                  >
                    <Lottie options={defaultOptions} height={50} width={50} />
                    typing...
                  </div>
                </div>

                {/* Input form for sending messages */}
                <form className="bg-transparent">
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
                  Select a conversation
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
