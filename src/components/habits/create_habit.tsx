import type { Habit } from "@prisma/client";
import { useState } from "react";
import { api } from "../../utils/api";

export const CreateHabit: React.FC = () => {
  const [habit, setHabit] = useState<undefined | Habit>();
  const newHabit = api.habit.createHabit.useMutation();
  function createHabit() {
    newHabit.mutate({ name: "hello" });
    setHabit(newHabit.data);
  }

  return (
    <div className="m-6 flex flex-col items-center justify-center gap-4">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={createHabit}
      >
        Create Habit
      </button>
    </div>
  );
};
