import { CreateCommentDto } from './dto/create-comment.dto';
import { Injectable } from '@nestjs/common';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly productService: ProductService,
  ) {}

  async create(
    productId: string,
    createCommentDto: CreateCommentDto,
  ): Promise<void> {
    const { contents } = createCommentDto;

    const product = await this.productService.findBy(productId);
    console.log(product);

    const newComment = this.commentRepository.create({
      contents,
      product,
    });

    await this.commentRepository.save(newComment);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }
}
