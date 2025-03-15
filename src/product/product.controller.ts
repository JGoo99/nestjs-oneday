import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // get all
  @Get('all')
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  // get one
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.findBy(id);
  }

  // create one
  @Post()
  async createOne(@Body() createProductDto: CreateProductDto): Promise<void> {
    await this.productService.create(createProductDto);
  }

  // update (patch)
  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() productDto: CreateProductDto,
  ): Promise<void> {
    await this.productService.update(id, productDto);
  }

  // delete one
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<void> {
    await this.productService.deleteById(id);
  }
}
