import { Checkbox } from "@heroui/react";
import Link from "next/link";

function Page() {
  return (
    <Link href="/home/long-term/5" className="block">
      <div className="bg-black-950 rtl font-iran-sans flex items-start justify-between gap-2 rounded-2xl p-3">
        <div className="flex w-25 flex-col items-start gap-1.5">
          <p className="bg-turquoise text-black-950 h-fit max-w-25 overflow-hidden rounded-full px-2 text-xs text-nowrap text-ellipsis">
            دسته بندی بلن دنننن
          </p>
          <p className="border-turquoise text-turquoise h-fit w-fit rounded-full border px-2 text-[13px] font-bold">
            الویت
          </p>
        </div>

        <div className="flex-1 pt-1.5">
          <h3 className="overflow-hidden bg-amber-300/0 text-center text-lg text-ellipsis text-white">
            تایتل
          </h3>
        </div>

        <div className="flex w-20 flex-col items-end gap-1.5">
          <Checkbox variant="secondary">
            <Checkbox.Content>
              <Checkbox.Control className="h-5 w-5 bg-zinc-500">
                <Checkbox.Indicator />
              </Checkbox.Control>
            </Checkbox.Content>
          </Checkbox>

          <div className="ltr flex flex-col text-xs">
            {false ? (
              <>
                <span>26 Days</span>
                <span className="text-teal-400">Remaining</span>
              </>
            ) : (
              <span className="text-teal-400">1404/04/04</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Page;
