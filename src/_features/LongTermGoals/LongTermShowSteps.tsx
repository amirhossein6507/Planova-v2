import { TDailyGoalStep } from "@/src/_types/dailyGoalsTypes";
import { TLongTermGoalStep } from "@/src/_types/longTermGoalTypes";
import { Checkbox } from "@heroui/react";

type LongTermShowStepsProps = {
  steps: any;
};

function LongTermShowSteps({ steps }: LongTermShowStepsProps) {
  return (
    <div className="mb-5 border border-teal-400">
      <h5 className="text-black-900 font-main bg-teal-400 text-center text-xl font-bold">
        steps:
      </h5>

      <ul className="rtl divi flex flex-col gap-3.5 divide-y divide-teal-400 p-3">
        {steps?.map((goal: TLongTermGoalStep) => (
          <li key={goal.id} className="pb-2">
            <Checkbox>
              <Checkbox.Content className="flex items-start">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                {goal.step}
              </Checkbox.Content>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LongTermShowSteps;
