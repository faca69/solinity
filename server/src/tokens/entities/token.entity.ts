import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: 'The ID of the Token',
    example: '0772a1fe-363e-47dc-8655-f7007f6f1738',
  })
  id: string;

  @Column({ length: 50 })
  @ApiProperty({
    type: String,
    example: 'FACA COIN',
  })
  name: string;

  @Column({ length: 8 })
  @ApiProperty({ type: String, example: '$FACA' })
  symbol: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'https://picsum.photos/200',
  })
  image: string;

  @Column({ length: 250 })
  @ApiProperty({
    type: String,
    example: 'This is an example description of the token.',
  })
  description: string;

  @Column('bigint')
  @ApiProperty({
    type: Number,
    example: 1000000,
  })
  totalSupply: number;

  @Column()
  @ApiProperty({
    type: Boolean,
    example: true,
  })
  revokeMintAuthority: boolean;

  @Column()
  @ApiProperty({
    type: Number,
    example: 50000,
  })
  supplyBurned: number;

  @Column({ length: 250 })
  @ApiProperty({
    type: String,
    example: 'Funds will be used for development and marketing.',
  })
  useOfFunds: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'EJULXUZuKMdPnr5aP7smZxkG5HkZBisaZ6y4XsP4ZTbo',
  })
  solanaAddress: string;

  @Column({ type: 'timestamp with time zone' })
  @ApiProperty({
    type: String,
    example: '2025-08-30',
  })
  releaseDate: string;

  @Column()
  @ApiProperty({
    type: Boolean,
    example: true,
  })
  isAdvertised: boolean;

  @Column({ length: 255, nullable: true })
  @ApiProperty({ type: String, example: 'https://example.com' })
  website?: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({ type: String, example: 'https://twitter.com/token' })
  twitter?: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({
    type: String,
    example: 'https://telegram.me/token',
  })
  telegram?: string;

  @ApiProperty({
    type: Date,
    example: '1878-01-01 00:00:00',
  })
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;
}
