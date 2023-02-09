import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const habitRouter = createTRPCRouter({
  getUserHabits: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.habit.findMany({
      where: {
        user: ctx.session.user,
      },
    });
  }),
});
