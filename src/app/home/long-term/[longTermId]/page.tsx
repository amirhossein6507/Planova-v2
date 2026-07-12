"use client";

import {
  HiArchiveBoxArrowDown,
  HiMiniArrowUturnLeft,
  HiMiniChevronDoubleDown,
  HiMiniChevronDoubleUp,
  HiMiniChevronUpDown,
  HiPencil,
  HiTrash,
} from "react-icons/hi2";
import { Button, Checkbox, Label, ProgressCircle } from "@heroui/react";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { HiArchive } from "react-icons/hi";
import Link from "next/link";

const description =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";

function Page() {
  const [isCollaps, setIsCollaps] = useState(true);

  return (
    <div className="font-iran-sans flex flex-col gap-3 pb-30">
      <div>
        <Link href="/home/long-term">
          <Button size="sm">
            <HiMiniArrowUturnLeft />
            Back To Goals
          </Button>
        </Link>
      </div>

      <div className="font-main flex flex-col items-center justify-center">
        <span>1404/04/04</span>

        <div className="flex items-center gap-3">
          <ProgressCircle aria-label="remining" value={25} maxValue={30}>
            <ProgressCircle.Track>
              <ProgressCircle.TrackCircle />
              <ProgressCircle.FillCircle />
            </ProgressCircle.Track>
          </ProgressCircle>
          <Label>22 days remining</Label>
        </div>
      </div>

      <h3 className="text-turquoise text-center text-2xl font-bold">تایتل</h3>

      <span className="text-black-900 mx-auto w-fit rounded-full bg-teal-400 px-2">
        شخصی
      </span>

      <div className="flex flex-col">
        {false && (
          <span className="font-main flex items-center gap-1">
            <HiMiniChevronDoubleUp size={20} color="#22dd22" />
            This goal is a
            <span className="text-black-900 bg-green-400 px-1 font-semibold">
              high
            </span>
            priority.
          </span>
        )}

        {true && (
          <span className="font-main flex items-center gap-1">
            <HiMiniChevronUpDown size={20} color="#fff94f" />
            This goal is a
            <span className="text-black-900 bg-amber-300 px-1 font-semibold">
              medium
            </span>
            priority.
          </span>
        )}

        {false && (
          <span className="font-main flex items-center gap-1">
            <HiMiniChevronDoubleDown size={20} color="#ff5353" />
            This goal is a
            <span className="text-black-900 bg-red-400 px-1 font-semibold">
              low
            </span>
            priority.
          </span>
        )}
      </div>

      <div className="rtl leading-7">
        {isCollaps ? description.slice(0, 70) : description}
        <Button
          variant="ghost"
          onClick={() => setIsCollaps((col) => !col)}
          className="px-2.5 text-sm font-extralight text-teal-400 italic"
        >
          {isCollaps ? "...show more" : "show less"}
        </Button>
      </div>

      <div className="mb-5 border border-teal-400">
        <h5 className="text-black-900 font-main bg-teal-400 text-center text-xl font-bold">
          steps:
        </h5>

        <ul className="rtl divi flex flex-col gap-3.5 divide-y divide-teal-400 p-3">
          <li className="pb-2">
            <Checkbox>
              <Checkbox.Content className="flex items-start">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                قدم اول
              </Checkbox.Content>
            </Checkbox>
          </li>
          <li className="pb-2">
            <Checkbox>
              <Checkbox.Content className="flex items-start">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                قدم دوم
              </Checkbox.Content>
            </Checkbox>
          </li>
          <li className="pb-2">
            <Checkbox>
              <Checkbox.Content className="flex items-start">
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                قدم سوم
              </Checkbox.Content>
            </Checkbox>
          </li>
        </ul>
      </div>

      {/* <div>tools: edit, delete, archive, complited</div> */}
      <div className="mx-auto flex w-fit gap-4 rounded-full border border-teal-400 p-1.5">
        <Button size="sm" isIconOnly className="bg-green-400">
          <FiCheckCircle />
        </Button>

        <Button size="sm" isIconOnly className="bg-indigo-500">
          <HiPencil />
        </Button>

        <Button size="sm" isIconOnly className="bg-amber-500">
          <HiArchiveBoxArrowDown />
        </Button>

        <Button size="sm" isIconOnly variant="danger">
          <HiTrash />
        </Button>
      </div>
    </div>
  );
}

export default Page;
