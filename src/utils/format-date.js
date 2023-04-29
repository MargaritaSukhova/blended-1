import { formatDistanceToNow, format } from 'date-fns';

export const formatDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const dateNormalizer = date => {
  return format(new Date(date), "Pp")
}
