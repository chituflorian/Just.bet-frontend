import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeartIcon from "../../public/assets/svg/heart.svg";
import ReplyIcon from "../../public/assets/svg/arrow-uturn-left.svg";

interface ChatMessageProps {
  message?: {
    id: string;
    name: string;
    message: string;
    level: number;
    createdAt: string;
    likedBy: string[];
    votes?: boolean;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  // Hardcoded data for design purposes
  const defaultMessage = {
    id: "1",
    name: "Username",
    message: "Hello World",
    level: 1,
    createdAt: new Date().toISOString(),
    likedBy: [],
    votes: false,
  };

  const msg = message || defaultMessage;

  return (
    <div className="flex gap-4">
      <div className="flex items-start justify-start">
        <div className="relative">
          <Link href="/profile">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <Image src="/profile.jpeg" alt="Profile picture" width={48} height={48} />
            </div>
          </Link>
          <div className="absolute bottom-0 right-0 z-[1] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#1a1919] bg-[#ffe619] shadow-[0px_0px_12px_1px_#ffb42c_inset]">
            <span className="font-outfit-medium text-sm text-[#1a1919]">{msg.level}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex justify-between gap-4">
          <div className="flex flex-nowrap items-center gap-2">
            <h2 className="font-outfit-medium line-clamp-1 text-[#f0f0f0]">{msg.name}</h2>
            <div className="h-0.5 w-0.5 bg-[#777]"></div>
            <span className="font-outfit-medium whitespace-nowrap text-[8px] text-[#777]">
              {/* {new Date(msg.createdAt).toLocaleTimeString()} */}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-outfit-medium w-[1ch] text-sm text-[#ffe619]">{msg.likedBy.length || ""}</span>
              <button className={`flex items-center justify-center ${!msg.votes ? "no-shine" : ""}`}>
                <div className="flex h-4 w-4 items-center justify-center">
                  <HeartIcon className="h-4 w-4 fill-[#ffe619]" />
                </div>
              </button>
            </div>
            <div className="z-[1] flex items-center justify-center">
              <button>
                <ReplyIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div className="relative z-[1] flex rounded-[4px] bg-[#191919] px-4 py-2 shadow-[0px_0px_23px_3px_#272727_inset]">
            <span className="font-outfit-medium text-sm leading-normal text-[#f0f0f0]">{msg.message}</span>
          </div>
          <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#191919] shadow-[0px_0px_23px_-3px_#272727_inset]"></div>
        </div>
      </div>
    </div>
  );
}
