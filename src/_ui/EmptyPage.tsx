import { HiCubeTransparent } from "react-icons/hi2";

function EmptyPage({ message }: { message?: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 py-15">
      <h5 className="text-turquoise flex items-center gap-1 text-xl font-bold">
        <span className="text-2xl text-white">
          <HiCubeTransparent />
        </span>
        This page has empty
      </h5>
      <p className="text-white">{message}</p>
    </div>
  );
}

export default EmptyPage;
