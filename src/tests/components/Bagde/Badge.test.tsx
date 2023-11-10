import { render } from '@testing-library/react';
import Badge from 'components/Badge';
import { badgeMock } from 'tests/mocks/badge';

describe('Badge Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Badge data={badgeMock} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the badge component', () => {
    render(<Badge data={badgeMock} />);
  });

  it('renders the correct number of badges', () => {
    const { container } = render(<Badge data={badgeMock} />);
    const badges = container.querySelectorAll('.inline-block');
    expect(badges.length).toBe(badgeMock.length);
  });

  it('renders badges with the correct text', () => {
    const { getByText } = render(<Badge data={badgeMock} />);
    badgeMock.forEach((item) => {
      const badgeElement = getByText(item.text);
      expect(badgeElement).toBeInTheDocument();
    });
  });

  it('ensures that badges have valid data', () => {
    const { container } = render(<Badge data={badgeMock} />);
    badgeMock.forEach((item) => {
      const badgeElement = container.querySelector(`.${item.color}`);
      expect(badgeElement).toHaveTextContent(item.text);
    });
  });
});
