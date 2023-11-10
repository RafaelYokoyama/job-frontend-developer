export type ModalProps = {
  modalOpen: boolean;
  selectedVideo: string;
  closeModal: () => void;
  children?: React.ReactNode;
};
