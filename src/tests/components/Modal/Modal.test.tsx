import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from 'components/Modal';

const mockModalProps = {
  modalOpen: true,
  selectedVideo: 'abcd1234',
  closeModal: jest.fn(),
};

describe('Modal Component', () => {
  it('checks a snapshot', () => {
    const { container } = render(<Modal {...mockModalProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should render modal with provided video', () => {
    const { getByTitle } = render(<Modal {...mockModalProps} />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/abcd1234'
    );
  });

  it('should call closeModal function when close button is clicked', () => {
    const { getByText } = render(<Modal {...mockModalProps} />);
    const closeButton = getByText('Close');
    fireEvent.click(closeButton);
    expect(mockModalProps.closeModal).toHaveBeenCalled();
  });

  it('should not render modal when modalOpen is false', () => {
    const { queryByTitle } = render(
      <Modal {...mockModalProps} modalOpen={false} />
    );
    const iframeElement = queryByTitle('YouTube video player');
    expect(iframeElement).not.toBeInTheDocument();
  });

  it('renders children props correctly', () => {
    const mockChildElement = (
      <div data-testid="mock-child">Mock Child Element</div>
    );
    const { getByTestId } = render(
      <Modal {...mockModalProps}>{mockChildElement}</Modal>
    );
    const childElement = getByTestId('mock-child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Mock Child Element');
  });
});
