import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import { api } from "../../utils/api";

const Id: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (Array.isArray(id) || !id) return <Layout />;
  const { data: habit } = api.habit.getUserHabit.useQuery({ id });

  return (
    <Layout>
      {habit ? (
        <section>
          <h1>{habit.name}</h1>
          <time>{habit.createdAt.toLocaleString()}</time>
        </section>
      ) : (
        <div>Not found!</div>
      )}
    </Layout>
  );
};

export default Id;
