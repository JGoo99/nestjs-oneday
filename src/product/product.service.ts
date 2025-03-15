import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findBy(id: string): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<void> {
    const newProduct = this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct);
  }

  async update(id: string, productDto: CreateProductDto): Promise<void> {
    await this.productRepository.update(id, productDto);
  }

  async deleteById(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
