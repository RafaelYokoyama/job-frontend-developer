import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from 'components/SearchBar';

describe('SearchBar Component', () => {
  const handleFormSubmit = jest.fn();
  const onChange = jest.fn();

  it('renders the search bar component', () => {
    render(
      <SearchBar
        query=""
        handleFormSubmit={handleFormSubmit}
        onChange={onChange}
        loading={false}
      />
    );
  });

  it('renders the search bar correctly with initial values', () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        query=""
        handleFormSubmit={handleFormSubmit}
        onChange={onChange}
        loading={false}
      />
    );
    const inputElement = getByPlaceholderText('Procure o artista');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange on input change', () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        query=""
        handleFormSubmit={handleFormSubmit}
        onChange={onChange}
        loading={false}
      />
    );
    const inputElement = getByPlaceholderText('Procure o artista');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('renders the button correctly with appropriate text', () => {
    const { getByText } = render(
      <SearchBar
        query=""
        handleFormSubmit={handleFormSubmit}
        onChange={onChange}
        loading={false}
      />
    );
    const buttonElement = getByText('Pesquisar');
    expect(buttonElement).toBeInTheDocument();
  });
});
