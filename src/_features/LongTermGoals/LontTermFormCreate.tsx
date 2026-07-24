"use client";

import { createLongTermGoal } from "@/src/_lib/actions";
import { TCategory, TDailyGoalStep } from "@/src/_types/dailyGoalsTypes";
import {
  convertGregorianToJalali,
  getTodayJalali,
} from "@/src/_utils/timeAndDate";
import {
  Input,
  SelectIndicator,
  SelectTrigger,
  SelectValue,
  Surface,
  TextArea,
  Select,
  ListBox,
  Key,
  SelectPopover,
  Modal,
  Button,
  Switch,
  DateRangePicker,
  I18nProvider,
  Label,
  DateField,
  RangeCalendar,
  RangeCalendarHeader,
  DateValue,
} from "@heroui/react";
import { setPriority } from "node:os";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { HiMiniExclamationTriangle, HiTrash } from "react-icons/hi2";

// TYPES -->
type LongTermFormCreateProps = {
  categories: TCategory[];
};

type MainFormSectionProps = {
  categories: TCategory[] | null | undefined;
  setCategory: Dispatch<SetStateAction<Key | null>>;
  category: Key | null;
  setPriority: Dispatch<SetStateAction<Key | null>>;
  priority: Key | null;
};

type CustomizeFormSectionProps = {
  setStepsPanel: Dispatch<SetStateAction<boolean>>;
  stepsPanel: boolean;
  setDatePanel: Dispatch<SetStateAction<boolean>>;
  datePanel: boolean;
};

type StepsSectionProps = {
  step: TDailyGoalStep;
  onDeleteStep: (step: number) => void;
  disableDelete: boolean;
  onCreateTask: (stepValue: string, order: number) => void;
};

type DateSectionProps = {
  date: DateRange | null;
  setDate: Dispatch<SetStateAction<DateRange | null>>;
  setStartDate: Dispatch<SetStateAction<string | null>>;
  setEndDate: Dispatch<SetStateAction<string | null>>;
};

type DateRange = {
  start: DateValue;
  end: DateValue;
};
// TYPES <--

// PRIORITY ITEMS
const PRIORITY_ITEM = [
  {
    value: null,
  },
  {
    value: "high",
  },
  {
    value: "medium",
  },
  {
    value: "low",
  },
];

function LongTermFormCreate({ categories }: LongTermFormCreateProps) {
  const [priority, setPriority] = useState<Key | null>(null);

  const [steps, setSteps] = useState<TDailyGoalStep[]>([
    { order: 1, step: "first step", status: false },
  ]);
  const [step, setStep] = useState([]);
  const [category, setCategory] = useState<Key | null>(null);

  const [date, setDate] = useState<DateRange | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const [datePanel, setDatePanel] = useState(false);
  const [stepsPanel, setStepsPanel] = useState(false);

  const reminingDays = !date
    ? 0
    : Math.floor(
        (date.end.toDate("UTC").getTime() -
          date.start.toDate("UTC").getTime()) /
          (1000 * 60 * 60 * 24),
      );

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

  useEffect(() => {
    const resetDate = () => {
      setStartDate(null);
      setEndDate(null);
      setDate(null);
    };
    if (datePanel === false) {
      resetDate();
    }
  }, [datePanel]);

  return (
    <Surface>
      <form
        action={createLongTermGoal}
        className="font-iran-sans rtl flex w-full flex-col gap-3"
      >
        <MainFormSection
          category={category}
          categories={categories}
          setCategory={setCategory}
          setPriority={setPriority}
          priority={priority}
        />

        <CustomizeFormSection
          setStepsPanel={setStepsPanel}
          stepsPanel={stepsPanel}
          setDatePanel={setDatePanel}
          datePanel={datePanel}
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

        {datePanel && (
          <DateSection
            date={date}
            setDate={setDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}

        <Modal.Footer className="mt-2 flex gap-2">
          <Button className="flex-1" type="submit">
            Create
          </Button>
          <Button className="flex-1" type="reset" variant="secondary">
            Reset
          </Button>
        </Modal.Footer>

        <input type="hidden" name="startDate" value={startDate ?? today} />
        <input type="hidden" name="endDate" value={endDate ?? ""} />
        <input type="hidden" name="reminingDays" value={reminingDays} />
        <input type="hidden" name="priority" value={priority ?? ""} />
        <input type="hidden" name="category" value={category ?? 1} />
        <input type="hidden" name="steps" value={JSON.stringify(steps) ?? ""} />
      </form>
    </Surface>
  );
}

function MainFormSection({
  category,
  setCategory,
  categories,
  priority,
  setPriority,
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

      <Select
        placeholder="priority"
        variant="secondary"
        value={priority}
        onChange={(value) => setPriority(value)}
        aria-label="priority"
      >
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>

        <SelectPopover>
          <ListBox>
            {PRIORITY_ITEM.map((item) => (
              <ListBox.Item
                textValue={item.value ?? "none"}
                id={item.value ?? "null"}
                key={item.value}
                className={`${item.value == null ? "opacity-50" : ""}`}
              >
                {item.value ?? "none"}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </SelectPopover>
      </Select>
    </>
  );
}

function CustomizeFormSection({
  datePanel,
  setDatePanel,
  setStepsPanel,
  stepsPanel,
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
        onChange={setDatePanel}
        isSelected={datePanel}
        aria-label="defining time"
      >
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          set date
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

function DateSection({
  date,
  setDate,
  setEndDate,
  setStartDate,
}: DateSectionProps) {
  useEffect(() => {
    const handleDateToJalali = (date: DateRange | null) => {
      if (date === null) return;
      const { start, end } = date;

      const getStartDate = `${start.year}-${start.month}-${start.day}`;
      const getEndDate = `${end.year}-${end.month}-${end.day}`;

      const startDate = convertGregorianToJalali(getStartDate);
      const endDate = convertGregorianToJalali(getEndDate);

      setStartDate(startDate);
      setEndDate(endDate);
    };

    handleDateToJalali(date);
  }, [date, setEndDate, setStartDate]);

  return (
    <>
      <I18nProvider locale="fa-IR-u-ca-persian-nu-latn">
        <DateRangePicker
          // startName="startDate"
          // endName="endDate"
          value={date}
          onChange={setDate}
        >
          <Label className="text-left">set start and end date</Label>
          <DateField.Group variant="secondary">
            <DateField.Input slot="start">
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateRangePicker.RangeSeparator />
            <DateField.Input slot="end">
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateField.Suffix>
              <DateRangePicker.Trigger>
                <DateRangePicker.TriggerIndicator />
              </DateRangePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>

          <DateRangePicker.Popover>
            <RangeCalendar aria-label="">
              <RangeCalendarHeader>
                <RangeCalendar.YearPickerTrigger>
                  <RangeCalendar.YearPickerTriggerIndicator />
                  <RangeCalendar.YearPickerTriggerHeading />
                </RangeCalendar.YearPickerTrigger>
                <RangeCalendar.NavButton slot="next" />
                <RangeCalendar.NavButton slot="previous" />
              </RangeCalendarHeader>

              <RangeCalendar.Grid>
                <RangeCalendar.GridHeader>
                  {(day) => (
                    <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>
                  )}
                </RangeCalendar.GridHeader>
                <RangeCalendar.GridBody>
                  {(date) => <RangeCalendar.Cell date={date} />}
                </RangeCalendar.GridBody>
              </RangeCalendar.Grid>

              <RangeCalendar.YearPickerGrid>
                <RangeCalendar.YearPickerGridBody>
                  {({ year }) => <RangeCalendar.YearPickerCell year={year} />}
                </RangeCalendar.YearPickerGridBody>
              </RangeCalendar.YearPickerGrid>
            </RangeCalendar>
          </DateRangePicker.Popover>
        </DateRangePicker>
      </I18nProvider>
    </>
  );
}

export default LongTermFormCreate;
