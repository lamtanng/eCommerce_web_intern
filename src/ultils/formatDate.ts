import dayjs from 'dayjs';

export const formatDate = (date: string | undefined) =>
  !!date && dayjs(date, 'DD/MM/YYYY').format('DD/MM/YYYY HH:mm:ss');
