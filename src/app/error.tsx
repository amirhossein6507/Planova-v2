"use client";

function Error({ error }) {
  return (
    <div className="flex h-9/12 w-full flex-col items-center justify-center gap-1">
      <h5 className="text-turquoise text-2xl font-bold">ERROR</h5>
      <span>{error.message}</span>
    </div>
  );
}

export default Error;
