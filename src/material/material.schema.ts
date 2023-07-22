import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MaterialDocument = HydratedDocument<any>;

@Schema()
export class Material {
  @Prop()
  name: string;
  @Prop()
  quantity: number;
  @Prop()
  unit: string;
  @Prop()
  price: number;
  @Prop()
  totalPrice: number;
  @Prop()
  source: string;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);
