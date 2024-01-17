import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (
  date: Date | number,
  dateFormat: string,
): string | null => {
  return date ? format(date, dateFormat, { locale: ko }) : null;
};
