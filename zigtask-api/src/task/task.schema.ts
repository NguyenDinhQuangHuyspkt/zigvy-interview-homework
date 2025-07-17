import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

export enum ETaskStatus {
  TODO = 'TO_DO',
  INPROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  dueDate?: Date;

  @Prop({ enum: ETaskStatus, default: ETaskStatus.TODO })
  status: ETaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
