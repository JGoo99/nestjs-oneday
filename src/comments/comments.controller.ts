import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':productId')
  async create(
    @Param('productId') productId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    await this.commentsService.create(productId, createCommentDto);
  }

  @Get('all')
  async findAll(): Promise<Comment[]> {
    return await this.commentsService.findAll();
  }
}
