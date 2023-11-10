import React from 'react';
import { MessageBoxProps } from 'types/messageBox';

const MessageBox = ({ type, title, message }: MessageBoxProps) => {
  const getIconColor = () => {
    return type === 'error' ? 'text-red-500' : 'text-blue-500';
  };

  return (
    <div className={`p-4 ${getIconColor()}`}>
      <div className="flex items-center justify-center flex-col">
        <h1 className={`mb-4 text-2xl font-semibold ${getIconColor()}`}>
          {title}
        </h1>
        <p className="mb-4 text-lg text-gray-600 max-w-xs">{message}</p>
        <div className="animate-bounce">
          <svg
            className={`mx-auto h-16 w-16 ${getIconColor()}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Espere alguns minutos e tente novamente
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
