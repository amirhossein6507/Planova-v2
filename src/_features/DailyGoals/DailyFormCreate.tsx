"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { createDailyGoal } from "@/src/_lib/actions";
import {
  Button,
  Input,
  Label,
  SelectIndicator,
  SelectTrigger,
  SelectValue,
  Surface,
  Switch,
  TimeField,
  Select,
  ListBox,
  Modal,
  Key,
  TextArea,
} from "@heroui/react";
import { HiMiniExclamationTriangle, HiTrash } from "react-icons/hi2";
import { FiCheckCircle } from "react-icons/fi";
import { getTodayJalali } from "@/src/_utils/timeAdnDate";
import { TCategory, TDailyGoalStep } from "@/src/_types/dailyGoalsTypes";

type DailyFormCreateProps = {
  categories?: any[];
  id?: number;
};

type MainFormSectionProps = {
  categories: TCategory[] | null | undefined;
  setCategory: Dispatch<SetStateAction<Key | null>>;
  category: Key | null;
};

type CustomizeFormSectionProps = {
  setStepsPanel: Dispatch<SetStateAction<boolean>>;
  stepsPanel: boolean;
  setTimePanel: Dispatch<SetStateAction<boolean>>;
  timePanel: boolean;
};

type StepsSectionProps = {
  step: TDailyGoalStep;
  onDeleteStep: (step: number) => void;
  disableDelete: boolean;
  onCreateTask: (stepValue: string, order: number) => void;
};

function DailyFormCreate({ categories }: DailyFormCreateProps) {
  const [stepsPanel, setStepsPanel] = useState(false);
  const [timePanel, setTimePanel] = useState(false);
  const [steps, setSteps] = useState<TDailyGoalStep[]>([
    { order: 1, step: "first step", status: false },
  ]);
  const [category, setCategory] = useState<Key | null>(null);

  const today = getTodayJalali();

  const handleAddStep = () => {
    const newStep = {
      order: steps?.length + 1,
      step: "",
      status: false,
    };

    setSteps((cur) => [...cur, newStep]);
  };

  const handleCreateStep = (stepValue: string, order: number) => {
    setSteps((cur) => {
      return cur.map((item) =>
        item.order === order ? { ...item, step: stepValue } : item,
      );
    });
  };

  const handleDeleteStep = (step: number) => {
    setSteps((cur) => cur.filter((item) => item.order !== step));
  };

  return (
    <Surface>
      <form
        action={createDailyGoal}
        className="font-iran-sans rtl flex w-full flex-col gap-3"
      >
        <MainFormSection
          categories={categories}
          setCategory={setCategory}
          category={category}
        />

        <CustomizeFormSection
          setStepsPanel={setStepsPanel}
          stepsPanel={stepsPanel}
          setTimePanel={setTimePanel}
          timePanel={timePanel}
        />

        {stepsPanel && (
          <>
            {steps.map((step, index) => (
              <StepsSection
                key={index}
                step={step}
                onDeleteStep={handleDeleteStep}
                disableDelete={index === 0}
                onCreateTask={handleCreateStep}
              />
            ))}
            <p className="flex flex-row-reverse items-center justify-center gap-1 text-xs text-zinc-400">
              <HiMiniExclamationTriangle size={15} color="#ff4949" />
              <span>make sure to click checkmark button</span>
            </p>
            <Button
              onClick={() => handleAddStep()}
              className="w-full"
              variant="outline"
            >
              add step
            </Button>
          </>
        )}

        {timePanel && <TimeSection />}

        <Modal.Footer className="mt-2 flex gap-2">
          <Button className="flex-1" type="submit">
            Create
          </Button>
          <Button className="flex-1" type="reset" variant="secondary">
            Reset
          </Button>
        </Modal.Footer>

        <input type="hidden" value={today} name="date" />
        <input type="hidden" value={Number(category) || 1} name="category" />
        {stepsPanel && (
          <input type="hidden" value={JSON.stringify(steps)} name="steps" />
        )}
      </form>
    </Surface>
  );
}

function MainFormSection({
  categories,
  setCategory,
  category,
}: MainFormSectionProps) {
  return (
    <>
      <Input
        placeholder="tilte"
        required
        variant="secondary"
        name="title"
        aria-label="title"
      />

      <TextArea
        placeholder="description"
        variant="secondary"
        name="description"
        aria-label="description"
        rows={2}
      />

      <Select
        placeholder="category (by default: personal)"
        variant="secondary"
        value={category}
        onChange={(value) => setCategory(value)}
        aria-label="category"
      >
        <SelectTrigger>
          <SelectValue className="flex items-center gap-2" />
          <SelectIndicator />
        </SelectTrigger>
        <Select.Popover>
          <ListBox className="rtl font-iran-sans">
            {categories?.map((category) => (
              <ListBox.Item
                key={category.id}
                id={category.id}
                textValue={category.name}
                className="flex items-center"
              >
                <div
                  className="h-5 w-5 rounded-full"
                  style={{
                    backgroundColor: category.color ? category.color : "",
                  }}
                ></div>
                {category.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </>
  );
}

function CustomizeFormSection({
  setStepsPanel,
  stepsPanel,
  setTimePanel,
  timePanel,
}: CustomizeFormSectionProps) {
  return (
    <div className="ltr flex flex-col gap-2">
      <Switch
        onChange={setStepsPanel}
        isSelected={stepsPanel}
        aria-label="defining the steps"
      >
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          defining the steps
        </Switch.Content>
      </Switch>

      <Switch
        onChange={setTimePanel}
        isSelected={timePanel}
        aria-label="defining time"
      >
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          defining time
        </Switch.Content>
      </Switch>
    </div>
  );
}

function StepsSection({
  step,
  onDeleteStep,
  disableDelete,
  onCreateTask,
}: StepsSectionProps) {
  const [stepValue, setStepValue] = useState("");

  return (
    <>
      <div className="flex w-full items-center gap-1">
        <Input
          placeholder={`step - ${step.order}`}
          required={true}
          variant="secondary"
          className="flex-1"
          onChange={(e) => setStepValue(e.target.value)}
          value={stepValue}
          aria-label="set step"
        />
        <div className="space-x-1">
          <Button
            onClick={() => onCreateTask(stepValue, step.order)}
            isIconOnly
            className="bg-teal-400 text-white"
            size="sm"
          >
            <FiCheckCircle />
          </Button>
          <Button
            onClick={() => onDeleteStep(step.order)}
            isIconOnly
            variant="danger"
            size="sm"
            isDisabled={disableDelete}
          >
            <HiTrash />
          </Button>
        </div>
      </div>
    </>
  );
}

function TimeSection() {
  return (
    <>
      <TimeField
        hourCycle={24}
        className="ltr flex-row items-center gap-2"
        isRequired
        name="startTime"
        aria-label="start time"
      >
        <Label className="w-19">start time:</Label>
        <TimeField.Group variant="secondary" className="flex-1">
          <TimeField.Input>
            {(segment) => <TimeField.Segment segment={segment} />}
          </TimeField.Input>
        </TimeField.Group>
      </TimeField>

      <TimeField
        hourCycle={24}
        className="ltr flex-row items-center gap-2"
        name="endTime"
        aria-label="end time"
      >
        <Label className="w-19">end time:</Label>
        <TimeField.Group variant="secondary" className="flex-1">
          <TimeField.Input>
            {(segment) => <TimeField.Segment segment={segment} />}
          </TimeField.Input>
        </TimeField.Group>
      </TimeField>
    </>
  );
}

export default DailyFormCreate;
