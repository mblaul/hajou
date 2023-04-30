import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const entryRouter = createTRPCRouter({
  getHabitEntry: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.entry.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  getHabitEntries: protectedProcedure
    .input(z.object({ habitId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.entry.findMany({
        where: {
          habitId: input.habitId,
        },
      });
    }),
  createHabitEntry: protectedProcedure
    .input(z.object({ habitId: z.string(), start: z.string().datetime() }))
    .mutation(({ ctx, input }) => {
      const data = {
        ...input,
      };
      return ctx.prisma.entry.create({
        data,
      });
    }),
  updateHabitEntry: protectedProcedure
    .input(
      z.object({
        start: z.date(),
        id: z.string(),
        end: z.date(),
        description: z.string(),
      })
    ) // TODO: Validate rich text shape
    .mutation(({ ctx, input }) => {
      const { id, ...rest } = input;
      return ctx.prisma.entry.update({ where: { id }, data: rest });
    }),
});
