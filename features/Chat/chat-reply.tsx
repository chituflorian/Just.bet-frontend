import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReplyPointer from "../../public/assets/svg/reply-pointer.svg";

interface ChatReplyProps {
  message?: {
    level: number;
    message: string;
  };
}

export default function ChatReply({ message }: ChatReplyProps) {
  // Hardcoded data for design purposes
  const defaultMessage = {
    level: 1,
    message: "Default reply message",
  };

  const msg = message || defaultMessage;

  return (
    <div className="flex h-9 items-center gap-3 pl-[17px]">
      <ReplyPointer className="translate-y-[10px]" />
      <div className="relative flex">
        <div className="relative z-[1] flex gap-2 rounded-[4px] bg-[#191919] px-4 py-[10px] shadow-[0px_0px_23px_3px_#272727_inset]">
          <div className="relative">
            <Link href="/">
              <Image
                src="/profile.jpeg"
                alt="User's profile picture"
                width={24}
                height={24}
                className="h-6 w-6 overflow-hidden rounded-full"
              />
            </Link>
            <div className="absolute bottom-0 right-0 z-[1] flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#1a1919] bg-[#ffe619] shadow-[0px_0px_12px_1px_#ffb42c_inset]">
              <span className="font-outfit-medium text-[8px] text-[#1a1919]">{msg.level}</span>
            </div>
          </div>
          <span className="font-outfit-medium text-xs leading-normal text-[#f0f0f0]">{msg.message}</span>
        </div>
      </div>
    </div>
  );
}
