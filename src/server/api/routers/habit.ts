import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const habitRouter = createTRPCRouter({
  getUserHabit: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.habit.findFirst({
        where: {
          id: input.id,
          user: ctx.session.user,
        },
      });
    }),
  getUserHabits: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.habit.findMany({
      where: {
        user: ctx.session.user,
      },
    });
  }),
  createHabit: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ ctx, input }) => {
      const data = {
        ...input,
        userId: ctx.session.user.id,
      };
      return ctx.prisma.habit.create({
        data,
      });
    }),
  updateHabit: protectedProcedure
    .input(z.object({ name: z.string(), id: z.string() }))
    .mutation(({ ctx, input }) => {
      const { id, ...rest } = input;
      return ctx.prisma.habit.update({ where: { id }, data: rest });
    }),
});
