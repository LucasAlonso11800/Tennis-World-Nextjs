import { formatDate } from "../helpers/formatDate";

export const currentDate: string = new Date().toISOString().substring(0, 10);
export const formattedDate: string = formatDate(currentDate);