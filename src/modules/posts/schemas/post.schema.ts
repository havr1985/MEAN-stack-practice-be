import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = HydratedDocument<UserPost>;

@Schema()
export class UserPost {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}
export const UserPostSchema = SchemaFactory.createForClass(UserPost);
