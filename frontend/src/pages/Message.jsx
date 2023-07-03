import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";

import axios from "axios";
import ConversationCard from "../components/cards/ConversationCard";
import SendMessageInput from "../components/inputs/SendMessageInput";
import SendMessageHeader from "../components/SendMessageHeader";
import MessageCard from "../components/cards/MessageBox";
import { io } from "socket.io-client";

const Message = () => {
  const { user, port } = useContext(AppContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    setSocket(io("https://byblie.onrender.com:443"));
  }, []);

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

  const handleChange = (e) => {
    const value = e.target.value;
    setNewMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiEndPoint = `${port}/api/v1/messages`;

    const message = {
      text: newMessage,
      sender: user.userId,
      conversationId: currentChat._id,
    };

    axios
      .post(apiEndPoint, message)
      .then((response) => {
        console.log(response.data);
        setMessages([...messages, response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen w-full flex antialiased text-gray-800 bg-white overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <section className="flex flex-col flex-none overflow-auto w-24 lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            <div className="header p-4 flex flex-row justify-between items-center flex-none">
              <p className="text-md font-bold hidden md:block">Messenges</p>
              <a
                href="#"
                className="block rounded-full hover:bg-gray-200 bg-gray-100 w-10 h-10 p-2"
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                </svg>
              </a>
            </div>
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

            <div className="contacts p-2 flex-1 overflow-y-scroll">
              {conversations.map((conversation, index) => (
                <div onClick={() => setCurrentChat(conversation)}>
                  <ConversationCard
                    key={index}
                    conversation={conversation}
                    currentUser={user}
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="flex flex-col flex-auto border-l">
            {currentChat ? (
              <>
                <SendMessageHeader />
                <div className="w-full flex-1 overflow-y-scroll overflow-x-hidden h-full p-3">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <MessageCard message={m} own={m.sender === user.userId} />
                    </div>
                  ))}
                </div>
                <form>
                  <SendMessageInput
                    handleSubmit={handleSubmit}
                    value={newMessage}
                    onChange={handleChange}
                  />
                </form>
              </>
            ) : (
              <div className="w-full h-full flex-1 grid place-content-center p-3">
                <h3 className="font-medium text-3xl text-gray-200">
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
