import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Material } from './material.schema';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material.name) private readonly materialModel: Model<Material>,
  ) {}
  async getAll(): Promise<any> {
    const abc = await this.materialModel.find().exec();
    const bcd = abc.map((item, index) => {
      return item.name;
    });
    return abc;
    // const ahihi = await this.materialModel.find().exec();
    // return ahihi;
  }
}
