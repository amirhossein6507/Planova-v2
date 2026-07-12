import { HiLinkSlash } from "react-icons/hi2";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-15">
      <h5 className="text-turquoise flex items-center gap-1 text-xl font-bold">
        <span className="text-2xl text-white">
          <HiLinkSlash />
        </span>
        NOT FOUND PAGE
      </h5>
      <p className="text-white"></p>
    </div>
  );
}

export default NotFound;
