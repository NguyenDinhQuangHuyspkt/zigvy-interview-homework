import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    status: 201,
    description: 'User signed up successfully',
    type: String,
  })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto.email, dto.password);
  }

  @Post('signin')
  @ApiResponse({
    status: 200,
    description: 'User signed in successfully',
    type: String,
  })
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto.email, dto.password);
  }
}
