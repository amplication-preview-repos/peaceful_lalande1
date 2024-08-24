/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Management as PrismaManagement } from "@prisma/client";

export class ManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ManagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.management.count(args);
  }

  async managements(
    args: Prisma.ManagementFindManyArgs
  ): Promise<PrismaManagement[]> {
    return this.prisma.management.findMany(args);
  }
  async management(
    args: Prisma.ManagementFindUniqueArgs
  ): Promise<PrismaManagement | null> {
    return this.prisma.management.findUnique(args);
  }
  async createManagement(
    args: Prisma.ManagementCreateArgs
  ): Promise<PrismaManagement> {
    return this.prisma.management.create(args);
  }
  async updateManagement(
    args: Prisma.ManagementUpdateArgs
  ): Promise<PrismaManagement> {
    return this.prisma.management.update(args);
  }
  async deleteManagement(
    args: Prisma.ManagementDeleteArgs
  ): Promise<PrismaManagement> {
    return this.prisma.management.delete(args);
  }
}