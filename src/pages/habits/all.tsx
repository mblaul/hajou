import type { NextPage } from "next";
import { api } from "../../utils/api";

import { HabitsList } from "../../components/habits/habits_list";
import { Layout } from "../../components/layout";

const HabitView: NextPage = (props) => {
  const { data: habits } = api.habit.getUserHabits.useQuery();
  if (!habits || habits.length === 0) return <div>No habbits</div>;
  return (
    <Layout>
      <HabitsList habits={habits} />;
    </Layout>
  );
};

export default HabitView;
