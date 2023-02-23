import { Habit } from "@prisma/client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../../components/layout";
import { api } from "../../utils/api";

// TODO: Handle habit cache update on form submission

const HabitsId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: habit } = api.habit.getUserHabit.useQuery({
    id: id?.toString() || "",
  });

  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const newHabit = api.habit.updateHabit.useMutation({});
  if (!habit) return <Layout />;

  const sharedClassnames = editModeEnabled
    ? "bg-white text-gray"
    : "bg-transparent text-white";

  const editableFields: (keyof Habit)[] = ["name"];
  function handleEditModeToggleClick() {
    setEditModeEnabled((prev) => !prev);
  }

  return (
    <Layout>
      <div>
        <button onClick={handleEditModeToggleClick}>✏️</button>
        <Formik
          initialValues={{ name: habit.name }}
          onSubmit={(values, actions) => {
            setEditModeEnabled(false);
            newHabit.mutate({
              ...values,
              id: habit.id,
            });
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {editableFields.map((editableField) => {
                return (
                  <div
                    key={editableField}
                    className={`mt-2 rounded-lg p-2 ${sharedClassnames}`}
                  >
                    <label htmlFor={editableField}>{editableField}</label>
                    <Field
                      key={editableField}
                      type="text"
                      name={editableField}
                      label={editableField}
                      disabled={!editModeEnabled}
                      placeholder={editableField.toUpperCase()}
                      className={`w-full text-4xl font-extrabold tracking-tight ${sharedClassnames}`}
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>
                );
              })}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default HabitsId;
