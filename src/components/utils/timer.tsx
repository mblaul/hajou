import { ISODateString } from "next-auth";
import React from "react";
import { getParsedType } from "zod";

type Props = {
  startTime: ISODateString;
};

function getParts(time: ISODateString) {
  return;
}

export const Timer = (props: Props) => {
  // const [time, setTime] = useState();
  // const { hours, minutes, seconds } = getParts(time);

  return <div className="inline-flex">Timer</div>;
};
