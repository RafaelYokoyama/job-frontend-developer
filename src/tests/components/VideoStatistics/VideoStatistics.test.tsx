import React from 'react';
import { render } from '@testing-library/react';

import VideoStatistics from 'components/VideoStatistics';
import { mockVideoStatistics } from 'tests/mocks/videoStatistics';

describe('VideoStatistics Component', () => {
  it('checks a snapshot', () => {
    const { container } = render(
      <VideoStatistics statistics={mockVideoStatistics} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders statistics values correctly', () => {
    const { getByText } = render(
      <VideoStatistics statistics={mockVideoStatistics} />
    );
    mockVideoStatistics.forEach((stat) => {
      const statValueElement = getByText(stat.value);
      expect(statValueElement).toBeInTheDocument();
    });
  });

  it('renders the correct number of statistics elements', () => {
    const { container } = render(
      <VideoStatistics statistics={mockVideoStatistics} />
    );
    const statisticElements = container.querySelectorAll(
      '.flex.items-center.pr-4'
    );
    expect(statisticElements.length).toBe(mockVideoStatistics.length);
  });

  it('renders the statistics in the correct order', () => {
    const { container } = render(
      <VideoStatistics statistics={mockVideoStatistics} />
    );
    const renderedStatistics = Array.from(
      container.querySelectorAll('.flex.items-center.pr-4')
    ).map((element) => element.textContent);
    const expectedStatisticsOrder = mockVideoStatistics.map(
      (stat) => `${stat.value}`
    );
    expect(renderedStatistics).toEqual(expectedStatisticsOrder);
  });

  it('renders the statistics with the correct CSS class', () => {
    const { container } = render(
      <VideoStatistics statistics={mockVideoStatistics} />
    );
    const statisticElements = container.querySelectorAll(
      '.flex.items-center.pr-4'
    );
    statisticElements.forEach((element) => {
      expect(element).toHaveClass('flex items-center pr-4');
    });
  });
});
