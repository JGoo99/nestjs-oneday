import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'iphone16' })
  name: string;

  @ApiProperty({ example: 'good.' })
  description: string;

  @ApiProperty({ example: 1500000 })
  price: number;

  @ApiProperty({ example: 'sample.jpg' })
  imageUrl: string;
}
