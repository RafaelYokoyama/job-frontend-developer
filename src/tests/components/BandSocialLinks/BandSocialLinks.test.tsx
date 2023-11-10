import React from 'react';
import { render } from '@testing-library/react';
import BandSocialLinks from 'components/BandSocialLinks';
import { mockSocialLinks } from 'tests/mocks/bandSocialLinks';

describe('BandSocialLinks Component', () => {
  it('renders band social links component', () => {
    render(<BandSocialLinks socialLinks={mockSocialLinks} />);
  });

  it('renders the correct number of social links', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLinks = container.querySelectorAll('.bg-white');
    expect(socialLinks.length).toBe(mockSocialLinks.length);
  });

  it('checks if social links open in a new tab', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLink = container.querySelector('.bg-white');
    expect(socialLink).toHaveAttribute('target', '_blank');
  });

  it('validates that each social link has the correct class', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLinks = container.querySelectorAll('.bg-white');
    socialLinks.forEach((link) => {
      expect(link).toHaveClass(
        'bg-white inline-flex justify-center items-center text-gray-500 shadow-lg w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm'
      );
    });
  });

  it('verifies that social links are not empty', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLinks = container.querySelectorAll('.bg-white');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('ensures that social links are not null', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLinks = container.querySelectorAll('.bg-white');
    socialLinks.forEach((link) => {
      expect(link).not.toBeNull();
    });
  });

  it('checks if social links have valid URLs', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    mockSocialLinks.forEach((link) => {
      const socialLink = container.querySelector(`[href="${link.url}"]`);
      expect(socialLink).not.toBeNull();
    });
  });

  it('renders social links with valid attributes', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLinks = container.querySelectorAll('.bg-white');
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });

  it('ensures that social links have valid target attributes', () => {
    const { container } = render(
      <BandSocialLinks socialLinks={mockSocialLinks} />
    );
    const socialLinks = container.querySelectorAll('.bg-white');
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
