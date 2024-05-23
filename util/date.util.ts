import { format, isValid } from 'date-fns';

import { isBlank } from '@/util/validation.util';

export const formatLongDate = (date: string) => {
  if (isBlank(date) || !isValid(date)) return;
  return format(date, 'PPpp');
};

export const formatDate = (date: string) => {
  if (isBlank(date) || !isValid(date)) return;
  return format(date, 'dd MMM yyyy');
};

export const formatTime = (date: string) => {
  if (isBlank(date) || !isValid(date)) return;
  return format(date, 'hh:mm aaa');
};

export const formatForecastTime = (date: string) => {
  if (isBlank(date) || !isValid(date)) return;
  return format(date, 'EEEE hh:mm aaa');
};
