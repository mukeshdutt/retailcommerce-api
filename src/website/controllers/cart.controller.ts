import { Controller, Get, Res } from '@nestjs/common';

@Controller('cart')
export class CartController {
  @Get()
  async allCategories(@Res() res) {
    return res.json({ message: 'All categories' });
  }

}
