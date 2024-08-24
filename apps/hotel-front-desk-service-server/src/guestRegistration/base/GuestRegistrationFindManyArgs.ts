/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GuestRegistrationWhereInput } from "./GuestRegistrationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GuestRegistrationOrderByInput } from "./GuestRegistrationOrderByInput";

@ArgsType()
class GuestRegistrationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GuestRegistrationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GuestRegistrationWhereInput, { nullable: true })
  @Type(() => GuestRegistrationWhereInput)
  where?: GuestRegistrationWhereInput;

  @ApiProperty({
    required: false,
    type: [GuestRegistrationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GuestRegistrationOrderByInput], { nullable: true })
  @Type(() => GuestRegistrationOrderByInput)
  orderBy?: Array<GuestRegistrationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GuestRegistrationFindManyArgs as GuestRegistrationFindManyArgs };
