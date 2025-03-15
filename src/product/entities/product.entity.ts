import { Comment } from 'src/comments/entities/comment.entity';
import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @OneToMany(() => Comment, (c: Comment) => c.product) // 옵션 설정하면 코멘트 보임
  comments: Comment[];
}
