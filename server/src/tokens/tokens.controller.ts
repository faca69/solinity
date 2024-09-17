import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
  UseInterceptors,
  Bind,
  UploadedFile,
  NotFoundException,
} from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokenCreateDto } from './dto/create-token.dto';
import { Token } from './entities/token.entity';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TokenQueryDto } from './dto/token-query.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@ApiTags('Tokens')
@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  // * ---------------------------------------
  @Get('/')
  @ApiOperation({ summary: 'Fetch All Tokens' })
  @ApiOkResponse({
    description: 'All Tokens are retrieved',
    type: [Token],
  })
  getTokens(@Query() tokenQueryDto: TokenQueryDto): Promise<Token[]> {
    return this.tokensService.getTokens(tokenQueryDto);
  }

  // * ---------------------------------------

  @Get(':id')
  async getToken(@Param('id') id: string) {
    try {
      const token = await this.tokensService.getToken(id);
      if (!token) {
        throw new NotFoundException('Token not found');
      }
      return token;
    } catch (error) {
      // Handle specific error for invalid UUID
      if (error.message.includes('invalid input syntax for type uuid')) {
        throw new NotFoundException('Token not found');
      }
      throw error; // Re-throw other errors
    }
  }

  // * ---------------------------------------
  // * ---------------------------------------
  // * ---------------------------------------
  // * ---------------------------------------
  // * ---------------------------------------
  // * ---------------------------------------

  @Post('/')
  @ApiOperation({ summary: 'Create a Token' })
  @ApiCreatedResponse({
    type: [Token],
    description: 'Token created successfully',
  })
  @ApiBody({ type: TokenCreateDto })
  createToken(@Body() body: TokenCreateDto): Promise<Token> {
    return this.tokensService.createToken(body);
  }
}
