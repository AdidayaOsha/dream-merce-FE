import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function dateFormatter(date: Date, formatStr: string) {
   return format(date, formatStr, { locale: id });
}
