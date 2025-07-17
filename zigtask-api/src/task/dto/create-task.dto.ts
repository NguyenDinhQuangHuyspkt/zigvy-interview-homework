import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  MaxLength,
} from 'class-validator';
import { ETaskStatus } from '../task.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task Title',
    description: 'The title of the task',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    example: 'This is a description of the task.',
    description: 'A brief description of the task',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: '2023-10-01T12:00:00Z',
    description: 'The due date of the task in ISO 8601 format',
  })
  @IsDateString()
  dueDate: string;

  @ApiProperty({
    example: ETaskStatus.DONE,
    description: 'The status of the task',
    required: false,
  })
  @IsEnum(ETaskStatus)
  status: ETaskStatus;
}
