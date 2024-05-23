import { format } from 'date-fns';

import { isBlank } from '@/util/validation.util';

export const formatLongDate = (date: string) => {
  if (isBlank(date)) return;
  return format(date, 'PPpp');
};

export const formatDate = (date: string) => {
  if (isBlank(date)) return;
  return format(date, 'dd MMM yyyy');
};
