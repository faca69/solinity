import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class TokenQueryDto {
  @ApiPropertyOptional({
    description: 'Page number to get',
    type: Number,
    default: 1,
  })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Number of tokens to get per page',
    type: Number,
    default: 12,
  })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  pageSize?: number = 12;
}
