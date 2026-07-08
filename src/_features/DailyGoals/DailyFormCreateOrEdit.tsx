"use client";

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
} from "@heroui/react";
import { useState } from "react";
import { HiTrash } from "react-icons/hi2";

function DailyFormCreateOrEdit() {
  const [stepsPanel, setStepsPanel] = useState(false);
  const [timePanel, setTimePanel] = useState(false);
  const [steps, setSteps] = useState([1]);
  const [category, setCategory] = useState("test");
  const [date] = useState(Date.now);

  const handleAddStep = () => {
    setSteps((cur) => [...cur, cur.length + 1]);
  };

  const handleDeleteStep = (step) => {
    setSteps((cur) => cur.filter((item) => item !== step));
    if (steps.length === 1) setStepsPanel(false);
  };

  return (
    <Surface>
      <form
        action={createDailyGoal}
        className="font-iran-sans rtl flex w-full flex-col gap-3"
      >
        <Input placeholder="tilte" required variant="secondary" name="title" />

        <Input
          placeholder="description"
          variant="secondary"
          name="description"
        />

        <Select placeholder="category" variant="secondary" defaultValue="test">
          <SelectTrigger>
            <SelectValue />
            <SelectIndicator />
          </SelectTrigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item textValue="test" value="test">
                test
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <div className="ltr flex flex-col gap-2">
          <Switch onChange={setStepsPanel} isSelected={stepsPanel}>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              defining the steps
            </Switch.Content>
          </Switch>

          <Switch onChange={setTimePanel} isSelected={timePanel}>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              defining time
            </Switch.Content>
          </Switch>
        </div>

        {stepsPanel && (
          <>
            {steps.map((step, index) => (
              <div key={index} className="flex w-full items-center gap-1">
                <Input
                  placeholder={`step - ${step}`}
                  required
                  variant="secondary"
                  className="flex-1"
                  name={`step-${step}`}
                />
                <Button
                  onClick={() => handleDeleteStep(step)}
                  isIconOnly
                  variant="danger"
                >
                  <HiTrash />
                </Button>
              </div>
            ))}

            <Button
              onClick={handleAddStep}
              className="w-full"
              variant="outline"
            >
              add step
            </Button>
          </>
        )}

        {timePanel && (
          <>
            <TimeField
              hourCycle={24}
              className="ltr flex-row items-center gap-2"
              isRequired
              name="startTime"
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
            >
              <Label className="w-19">end time:</Label>
              <TimeField.Group variant="secondary" className="flex-1">
                <TimeField.Input>
                  {(segment) => <TimeField.Segment segment={segment} />}
                </TimeField.Input>
              </TimeField.Group>
            </TimeField>
          </>
        )}

        <div className="mt-2 flex gap-2">
          <Button className="flex-1" type="submit" slot="close">
            Create
          </Button>
          <Button className="flex-1" type="reset" variant="secondary">
            Reset
          </Button>
        </div>

        <input type="hidden" value={date} name="date" />
      </form>
    </Surface>
  );
}

export default DailyFormCreateOrEdit;
