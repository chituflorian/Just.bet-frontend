"use client";

import React, { useRef, useState } from "react";
import MessagesIcon from "../../public/assets/svg/messages.svg";
import OptionsIcon from "../../public/assets/svg/more-options.svg";
import EmotesIcon from "../../public/assets/svg/emoticons.svg";
import SendIcon from "../../public/assets/svg/send-arrow.svg";
import CancelIcon from "../../public/assets/svg/x-icon.svg";
import SearchIcon from "../../public/assets/svg/search.svg";
import EclipseButton from "@components/shared/eclipse-button";
import ShiningButton from "@components/shared/shining-button";
import ChatMessage from "./chat-message";

interface ChatProps {
  expanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

export default function Chat({ expanded = false, onToggle, className }: ChatProps) {
  const [inputText, setInputText] = useState("");
  const [searchEmoji, setSearchEmoji] = useState("");
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
  const [repliedMessageData, setRepliedMessageData] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Hardcoded data for design purposes
  const connectedUsersCount = 1234;
  const messages = [
    {
      id: "1",
      name: "Username",
      message: "Hello World",
      level: 1,
      createdAt: new Date().toISOString(),
      likedBy: [],
      votes: false,
    },
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    // Handle sending message
    setInputText("");
  };

  const handleReply = (messageId: string) => {
    const message = messages.find((m) => m.id === messageId);
    setRepliedMessageData(message);
  };

  const handleCancelReply = () => {
    setRepliedMessageData(null);
  };

  const toggleEmojiModal = () => {
    setIsEmojiModalOpen(!isEmojiModalOpen);
  };

  return (
    <div className={`chat-container relative flex h-full flex-col ${className}`}>
      <div className="flex items-center justify-between border-b border-[#282828] p-4">
        <div className="flex items-center gap-4">
          <MessagesIcon className="h-5 w-5" />
          <span className="font-outfit-medium text-sm text-[#777777]">{connectedUsersCount} Online</span>
        </div>
        <EclipseButton>
          <div className="flex h-9 w-9 items-center justify-center">
            <OptionsIcon className="h-5 w-5" />
          </div>
        </EclipseButton>
      </div>

      <div ref={messagesContainerRef} className="relative flex flex-1 flex-col gap-6 overflow-y-auto p-4">
        <div className="top-overflow-chat-indicator absolute left-0 right-0 top-0 z-[2]" />
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            // onReply={() => handleReply(message.id)}
          />
        ))}
      </div>

      {repliedMessageData && (
        <div className="flex items-center justify-between border-t border-[#282828] px-4 py-2">
          <h1 className="font-outfit-medium text-xs text-[#777777]">
            Replying to <span className="text-sm font-semibold text-[#FFE619]">@{repliedMessageData.name}</span>
          </h1>
          <button onClick={handleCancelReply}>
            <CancelIcon />
          </button>
        </div>
      )}

      <div className="flex items-center gap-4 border-t border-[#282828] px-[30px] py-3.5">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          type="text"
          className="font-outfit-medium h-6 w-full flex-1 bg-transparent text-[#f0f0f0] placeholder:text-[#777777] focus:outline-none"
          placeholder="Type something..."
        />

        <ShiningButton>
          <EmotesIcon className="favorite-button h-5 w-5" />
        </ShiningButton>

        <button onClick={handleSendMessage} className="send-button flex-center h-10 w-10">
          <SendIcon />
        </button>
      </div>

      {isEmojiModalOpen && (
        <div
          ref={containerRef}
          className="emoji-picker-container container absolute bottom-16 right-4 flex flex-col gap-6 bg-[#1A1919] sm:right-16"
        >
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-2 h-4 w-4" />
            <input
              value={searchEmoji}
              onChange={(e) => setSearchEmoji(e.target.value)}
              type="text"
              placeholder="Search..."
              className="emoji-search-input font-outfit-medium w-full !pl-8 text-xs !text-[#9B9B9E]"
            />
          </div>
          <div className="emoji-list">{/* Emoji list will be populated here */}</div>
        </div>
      )}
    </div>
  );
}
