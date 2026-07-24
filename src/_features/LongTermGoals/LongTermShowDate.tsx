import { calculatorDiffDays, getTodayJalali } from "@/src/_utils/timeAndDate";
import { Label, ProgressCircle } from "@heroui/react";

type LongTermShowDateProps = {
  startDate: string;
  endDate: string;
  reminingDays: number;
};

function LongTermShowDate({
  endDate,
  reminingDays,
  startDate,
}: LongTermShowDateProps) {
  const today = getTodayJalali();

  const diffDays = endDate
    ? calculatorDiffDays(today, endDate, "jalali")
    : null;

  const is10Days = diffDays ? diffDays <= 10 : null;

  return (
    <div className="font-main flex flex-col items-center justify-center gap-2">
      <div className="space-x-2">
        <span>{startDate}</span>
        {endDate && <span className="text-red-400">{endDate}</span>}
      </div>

      {reminingDays && (
        <div className="flex items-center gap-3">
          <ProgressCircle
            aria-label="remining"
            value={diffDays!}
            maxValue={reminingDays}
            color={is10Days ? "danger" : "success"}
          >
            <ProgressCircle.Track>
              <ProgressCircle.TrackCircle />
              <ProgressCircle.FillCircle />
            </ProgressCircle.Track>
          </ProgressCircle>
          <Label>{diffDays} days remining</Label>
        </div>
      )}
    </div>
  );
}

export default LongTermShowDate;
