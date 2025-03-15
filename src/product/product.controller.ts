import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // get all
  @Get('all')
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  // create one
  @Post()
  async createOne(@Body() createProductDto: CreateProductDto): Promise<void> {
    await this.productService.create(createProductDto);
  }

  // update (patch)

  // delete one
}
