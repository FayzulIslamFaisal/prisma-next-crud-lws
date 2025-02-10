import { PrismaClient } from "@prisma/client";

const global = {
  prisma: PrismaClient,
};

export const prismaDb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaDb;
