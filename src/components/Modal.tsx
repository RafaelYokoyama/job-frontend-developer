import React from 'react';
import { ModalProps } from 'types/modal';
import Button from './Button';

const Modal = ({
  modalOpen,
  selectedVideo,
  closeModal,
  children
}: ModalProps) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <iframe
              className="h-[200px] sm:h-[400px] w-full"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          {children}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              onClick={closeModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              text="Close"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
