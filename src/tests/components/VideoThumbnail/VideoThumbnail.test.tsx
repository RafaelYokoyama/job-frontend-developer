import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VideoThumbnail from 'components/VideoThumbnail';
import { videoThumbnail } from 'tests/mocks/videoThumbnail';

describe('VideoThumbnail Component', () => {
  it('renders video thumbnail component', () => {
    render(
      <VideoThumbnail
        video={videoThumbnail}
        openModal={jest.fn()}
        children={<div>Sample children component</div>}
      />
    );
  });

  it('calls openModal function with the correct video ID when Play Video button is clicked', () => {
    const openModal = jest.fn();
    const { getByText } = render(
      <VideoThumbnail
        video={videoThumbnail}
        openModal={openModal}
        children={<div>Sample children component</div>}
      />
    );
    const playButton = getByText('Play Video');
    fireEvent.click(playButton);
    expect(openModal).toHaveBeenCalledWith('abc123');
  });

  it('renders the overlay correctly on hover', () => {
    const { container } = render(
      <VideoThumbnail
        video={videoThumbnail}
        openModal={jest.fn()}
        children={<div>Sample children component</div>}
      />
    );
    const thumbnailContainer = container.firstChild;
    fireEvent.mouseOver(thumbnailContainer);
    const overlayElement = container.querySelector('.overlay');
    expect(overlayElement).toBeInTheDocument();
  });

  it('applies the correct CSS classes to the container', () => {
    const { container } = render(
      <VideoThumbnail
        video={videoThumbnail}
        openModal={jest.fn()}
        children={<div>Sample children component</div>}
      />
    );
    const thumbnailContainer = container.firstChild;
    expect(thumbnailContainer).toHaveClass(
      'max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105'
    );
  });

  it('ensures that children components are rendered properly', () => {
    const { container } = render(
      <VideoThumbnail video={videoThumbnail} openModal={jest.fn()}>
        <div data-testid="child-component">Sample Child Component</div>
      </VideoThumbnail>
    );
    const childComponent = container.querySelector(
      '[data-testid="child-component"]'
    );
    expect(childComponent).toBeInTheDocument();
    expect(childComponent.textContent).toBe('Sample Child Component');
  });

  it('validates that the Play Video button is present and clickable', () => {
    const openModal = jest.fn();
    const { getByText } = render(
      <VideoThumbnail
        video={videoThumbnail}
        openModal={openModal}
        children={<div>Sample children component</div>}
      />
    );
    const playButton = getByText('Play Video');
    expect(playButton).toBeInTheDocument();
    fireEvent.click(playButton);
    expect(openModal).toHaveBeenCalledTimes(1);
  });

  it('verifies that the video ID is correctly displayed in the open modal function', () => {
    const openModal = jest.fn();
    const { getByText } = render(
      <VideoThumbnail
        video={videoThumbnail}
        openModal={openModal}
        children={<div>Sample children component</div>}
      />
    );
    const playButton = getByText('Play Video');
    fireEvent.click(playButton);
    expect(openModal).toHaveBeenCalledWith('abc123');
  });
});
