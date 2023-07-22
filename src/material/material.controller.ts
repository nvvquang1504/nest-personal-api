import { Controller, Get, Post } from '@nestjs/common';
import { MaterialService } from './material.service';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}
  @Get('/all')
  async getAllMaterial() {
    try {
      return await this.materialService.getAll();
    } catch (e) {
      console.log(e);
    }
  }
  @Post('/create')
  async createMaterial() {
    return;
  }
}
