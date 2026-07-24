import { TZDate } from "@date-fns/tz";
import { format, parse } from "date-fns-jalali";

export const getTodayJalali = () => {
  const today = new TZDate(new Date(), "Asia/Tehran");
  const persianDate = format(today, "yyyy/MM/dd");

  return persianDate;
};

export const convertGregorianToJalali = (date: any) => {
  const persianDate = format(date, "yyyy/MM/dd");
  return persianDate;
};

export const calculatorDiffDays = (
  startDate: any,
  endDate: any,
  calendarType: "jalali" | "gregorian",
) => {
  const parsDate = (date: any) => {
    if (calendarType === "gregorian") return new Date(date);
    return parse(date, "yyyy/MM/dd", new Date());
  };

  const start = parsDate(startDate);
  const end = parsDate(endDate);

  return Math.floor(
    (end?.getTime()! - start?.getTime()!) / (1000 * 60 * 60 * 24),
  );
};

export const timeFormat = (time: string) => {
  const formatedTime = time?.split(":")?.slice(0, 2)?.join(":");

  return formatedTime;
};
