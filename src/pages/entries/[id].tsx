import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import { api } from "../../utils/api";

const EntriesId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: entry } = api.entry.getHabitEntry.useQuery({
    id: id?.toString() || "",
  });

  if (!entry) return <Layout />;

  return (
    <Layout>
      <div>{entry.id}</div>
      <div>{entry.description}</div>
      <div>{entry.createdAt.toLocaleString()}</div>
      <div>{entry.start.toLocaleString()}</div>
      <div>{entry?.end?.toLocaleString()}</div>
    </Layout>
  );
};

export default EntriesId;
