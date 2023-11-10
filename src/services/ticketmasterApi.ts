import { AxiosResponse } from 'axios';
import { ticketmasterApi } from './api';

export const fetchTicketmasterData = async (
  searchQuery: string,
  ticketMasterKey: string
): Promise<AxiosResponse> => {
  return ticketmasterApi.get(
    `/attractions.json?keyword=${searchQuery}&apikey=${ticketMasterKey}`
  );
};
