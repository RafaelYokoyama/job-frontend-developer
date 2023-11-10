import { ChangeEvent, FormEvent } from 'react';

export type SearchBarProps = {
  query: string;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
};
