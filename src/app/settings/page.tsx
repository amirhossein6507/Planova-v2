import Link from "next/link";
import {
  HiArchiveBox,
  HiFolder,
  HiInformationCircle,
  HiMusicalNote,
} from "react-icons/hi2";

function Page() {
  return (
    <div className="flex flex-col items-center gap-3 px-3 pt-25">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="h-20 w-20 rounded-full bg-sky-100" />

        <h3 className="text-xl">username</h3>
      </div>

      <div className="w-full rounded-4xl border border-teal-300/50 p-5">
        <ul className="flex flex-wrap justify-around gap-3">
          <li>
            <Link
              href="/settings/manage-category"
              className="flex h-15 w-15 flex-col items-center justify-center rounded-3xl bg-red-400 text-white"
            >
              <HiFolder size={23} />
              <span className="text-[11px]">category</span>
            </Link>
          </li>

          <li>
            <Link
              href="/settings/archive"
              className="flex h-15 w-15 flex-col items-center justify-center rounded-3xl bg-amber-600 text-white"
            >
              <HiArchiveBox size={23} />
              <span className="text-[11px]">archive</span>
            </Link>
          </li>

          <li>
            <Link
              href="/settings/archive"
              className="flex h-15 w-15 flex-col items-center justify-center rounded-3xl bg-indigo-500 text-white"
            >
              <HiMusicalNote size={23} />
              <span className="text-[11px]">music</span>
            </Link>
          </li>

          <li>
            <Link
              href="/information"
              className="flex h-15 w-15 flex-col items-center justify-center rounded-3xl bg-fuchsia-500 text-white"
            >
              <HiInformationCircle size={23} />
              <span className="text-[11px]">about app</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
