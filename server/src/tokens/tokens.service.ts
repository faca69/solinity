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

  // async findOne(id: string): Promise<Token> {
  //   // Add a check to ensure the id is a valid UUID
  //   // if (!isUUID(id)) {
  //   //   throw new BadRequestException('Invalid UUID format');
  //   // }

  //   // const token = await this.tokensRepository.findOne({ where: { id } });
  //   // if (!token) {
  //   //   throw new NotFoundException(`Token with ID "${id}" not found`);
  //   // }
  //   // return token;
  // }
}