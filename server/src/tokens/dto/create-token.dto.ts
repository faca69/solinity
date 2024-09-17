import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class TokenCreateDto {
  @ApiProperty({
    description: 'Name of the token',
    minLength: 1,
    maxLength: 50,
    example: 'FACA COIN',
  })
  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: 'Symbol of the token',
    minLength: 1,
    maxLength: 8,
    example: '$FACA',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(8)
  symbol: string;

  @ApiProperty({
    description: 'URL of the token image',
    example: 'https://picsum.photos/200',
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    description: 'Description of the token',
    minLength: 1,
    maxLength: 250,
    example: 'This is an example description of the token.',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(250)
  description: string;

  @ApiProperty({
    description: 'Total supply of the token',
    minimum: 1,
    example: 100000000,
  })
  @IsInt()
  @Min(1)
  totalSupply: number;

  @ApiProperty({
    description: 'Indicates if the mint authority is revoked',
    example: true,
  })
  @IsBoolean()
  revokeMintAuthority: boolean;

  @ApiProperty({
    description: 'Amount of supply burned',
    example: 50000,
  })
  @IsInt()
  supplyBurned: number;

  @ApiProperty({
    description: 'Description of the use of funds',
    minLength: 1,
    maxLength: 250,
    example: 'Funds will be used for development and marketing.',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(250)
  useOfFunds: string;

  @ApiProperty({
    description: 'Solana address of the token',
    example: 'EJULXUZuKMdPnr5aP7smZxkG5HkZBisaZ6y4XsP4ZTbo',
  })
  @IsString()
  @IsNotEmpty()
  solanaAddress: string;

  @ApiProperty({
    description: 'Release date of the token in YYYY-MM-DD format',
    example: '2024-08-30',
  })
  @IsDateString()
  @IsNotEmpty()
  releaseDate: string;

  @ApiProperty({
    description: 'Indicates if the token is advertised',
    example: true,
  })
  @IsBoolean()
  isAdvertised: boolean;

  @ApiPropertyOptional({
    description: 'Website URL of the token',
    example: 'https://example.com',
  })
  @IsOptional()
  @IsString()
  website?: string | null;

  @ApiPropertyOptional({
    description: 'Twitter URL of the token',
    example: 'https://twitter.com/token',
  })
  @IsOptional()
  @IsString()
  twitter?: string | null;

  @ApiPropertyOptional({
    description: 'Telegram URL of the token',
    example: 'https://telegram.me/token',
  })
  @IsOptional()
  @IsString()
  telegram?: string | null;
}
