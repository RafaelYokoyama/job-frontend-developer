import React from 'react';
import { render } from '@testing-library/react';
import Gallery from 'components/Gallery';
import { mockGallery } from 'tests/mocks/gallery';

describe('Gallery Component', () => {
  it('checks a snapshot', () => {
    const { container } = render(<Gallery attractions={mockGallery} />);
    expect(container).toMatchSnapshot();
  });
  it('should render gallery with correct number of images', () => {
    const { getAllByAltText } = render(<Gallery attractions={mockGallery} />);
    const images = getAllByAltText(/Image/);
    expect(images.length).toBe(3);
  });

  it('should render gallery headings correctly', () => {
    const { getByText } = render(<Gallery attractions={mockGallery} />);
    mockGallery.forEach((attraction, index) => {
      const heading = getByText(`Galeria de Imagens ${index + 1}`);
      expect(heading).toBeInTheDocument();
    });
  });
});
