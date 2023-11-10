import React from 'react';
import { render } from '@testing-library/react';
import Details from 'components/Details';

describe('Details Component', () => {
  const testTitle = 'Test Title';
  const testDescription = 'Test Description';

  it('renders title and description correctly', () => {
    const { getByText } = render(
      <Details title={testTitle} description={testDescription} />
    );

    const titleElement = getByText(testTitle);
    const descriptionElement = getByText(testDescription);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the correct title', () => {
    const { getByText } = render(
      <Details title={testTitle} description={testDescription} />
    );

    const titleElement = getByText(testTitle);

    expect(titleElement).toHaveTextContent(testTitle);
  });

  it('renders the correct description', () => {
    const { getByText } = render(
      <Details title={testTitle} description={testDescription} />
    );

    const descriptionElement = getByText(testDescription);

    expect(descriptionElement).toHaveTextContent(testDescription);
  });
});
