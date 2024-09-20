import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';
import { TokenCreateDto } from './dto/create-token.dto';
import { TokenQueryDto } from './dto/token-query.dto';
import { isUUID } from 'class-validator';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token) private tokensRepository: Repository<Token>,
  ) {}

  async getTokens({ page, pageSize }: TokenQueryDto): Promise<Token[]> {
    return this.tokensRepository.find({
      order: {
        isAdvertised: 'DESC',
        createdAt: 'DESC',
      },

      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async getToken(id: string): Promise<Token> {
    return this.tokensRepository.findOneBy({ id });
  }

  async createToken(body: TokenCreateDto): Promise<Token> {
    const newToken = this.tokensRepository.create({
      ...body,
    });

    return this.tokensRepository.save(newToken);
  }
}
