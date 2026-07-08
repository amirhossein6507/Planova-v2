import { getDailySteps } from "@/src/_lib/server";
import DailyItemCardContent from "./DailyItemCardContent";
import DailyItemCardHeader from "./DailyItemCardHeader";

async function DailyItemCard({ goal }) {
  const { title, description, startTime, endTime, status, id } = goal;
  const steps = await getDailySteps(id);

  return (
    <div className="bg-black-950 rtl font-iran-sans rounded-3xl p-3">
      <DailyItemCardHeader
        title={title}
        startTime={startTime}
        endTime={endTime}
        category="شخصی"
        status={status}
      />
      <DailyItemCardContent description={description} steps={steps} />
    </div>
  );
}

export default DailyItemCard;
