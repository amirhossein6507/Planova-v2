import { TZDate } from "@date-fns/tz";
import { format } from "date-fns-jalali";

export const getTodayJalali = () => {
  const today = new TZDate(new Date(), "Asia/Tehran");
  const iranDate = format(today, "yyyy/MM/dd");

  return iranDate;
};

export const timeFormat = (time: string) => {
  const formatedTime = time?.split(":")?.slice(0, 2)?.join(":");

  return formatedTime;
};
