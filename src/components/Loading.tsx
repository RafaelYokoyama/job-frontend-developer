import React from 'react';
import '../animations/loading.css';
import { LoadingProps } from 'types/loading';

const LoadingState = ({
  message = 'Carregando...',
  isLoading = true
}: LoadingProps) => {
  return isLoading ? (
    <div className={'container-loading'}>
      <div className={'scaling-dots'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={'message'}>{message}</div>
    </div>
  ) : null;
};

export default LoadingState;
