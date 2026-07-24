"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";

type LongTermShowDescription = {
  description: string;
};

function LongTermShowDescription({ description }: LongTermShowDescription) {
  const [isCollaps, setIsCollaps] = useState(true);
  const longText = description.length > 70;

  return (
    <div className="rtl leading-7">
      {longText
        ? isCollaps
          ? description.slice(0, 70)
          : description
        : description}
      {longText && (
        <Button
          variant="ghost"
          onClick={() => setIsCollaps((col) => !col)}
          className="px-2.5 text-sm font-extralight text-teal-400 italic"
        >
          {isCollaps ? "...show more" : "show less"}
        </Button>
      )}
    </div>
  );
}

export default LongTermShowDescription;
