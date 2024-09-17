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
  findOne(@Param('id') id: string) {
    return this.tokensService.getToken(id);
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
