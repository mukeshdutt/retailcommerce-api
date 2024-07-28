import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  street: string;

  @Column({ name: 'address_line_1' })
  addressLine1: string;

  @Column({ name: 'address_line_2' })
  addressLine2: string;

  @Column()
  landmark: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @Column()
  country: string;

  @Column({ name: 'is_default_address' })
  isDefaultAddress: boolean;
}
