// import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Inventory } from './inventory.entity';

// @Entity()
// export class Supplier {
//   @PrimaryGeneratedColumn()
//   supplierId: number;

//   @Column({ name: 'supplier_name' })
//   supplierName: string;

//   @Column({ name: 'contact_name' })
//   contactName: string;

//   @Column({ name: 'contact_email' })
//   contactEmail: string;

//   @Column({ name: 'contact_phone' })
//   contactPhone: string;

//   @Column({ name: 'address_line1' })
//   addressLine1: string;

//   @Column({ name: 'address_line2', nullable: true })
//   addressLine2: string;

//   @Column({ name: 'city' })
//   city: string;

//   @Column({ name: 'state' })
//   state: string;

//   @Column({ name: 'postal_code' })
//   postalCode: string;

//   @Column({ name: 'country' })
//   country: string;

//   @Column({ name: 'website', nullable: true })
//   website: string;

//   @Column({ name: 'notes', type: 'text', nullable: true })
//   notes: string;

//   @Column({
//     name: 'created_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   createdAt: Date;

//   @Column({
//     name: 'updated_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//     onUpdate: 'CURRENT_TIMESTAMP',
//   })
//   updatedAt: Date;

//   @OneToMany(() => Inventory, (inventory) => inventory.supplierId)
//   inventories: Inventory[];
// }
