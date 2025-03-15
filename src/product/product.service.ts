import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private readonly productRepository: Repository<Product>;

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(createProductDto: CreateProductDto): Promise<void> {
    const newProduct = this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct);
  }
}
