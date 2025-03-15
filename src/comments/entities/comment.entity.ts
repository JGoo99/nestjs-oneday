import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './../../product/entities/product.entity';
import { BaseEntity } from 'src/common/base.entity';

@Entity()
export class Comment extends BaseEntity {
  @Column()
  contents: string;

  @ManyToOne(() => Product, (p: Product) => p.comments)
  product: Product;
}
