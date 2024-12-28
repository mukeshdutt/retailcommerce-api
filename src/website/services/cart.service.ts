// Imported required dependencies
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// -- Entities & ViewModels
import { Cart } from '../../shared/entities/cart.entity';

// -- Service class
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

   allCarts(): any {
  }
}