// import { Entity, Column, ManyToOne } from 'typeorm';
// import { Product } from './product.entity';
// import { Supplier } from './supplier.entity';

// @Entity()
// export class Inventory {
//     @Column({ name: 'inventory_id' })
//     inventoryId: number;

//     @ManyToOne(() => Product)
//     @Column({ name: 'product_id' })
//     productId: number;

//     @Column({ name: 'stock_quantity' })
//     stockQuantity: number;

//     @Column({ name: 'last_stock_update' })
//     lastStockUpdate: Date;

//     @Column()
//     location: string;

//     @Column({ name: 'minimum_stock_threshold' })
//     minimumStockThreshold: number;

//     @Column({ name: 'maximum_stock_threshold' })
//     maximumStockThreshold: number;

//     @Column({ name: 'expiration_date' })
//     expirationDate: Date;

//     @Column({ name: 'lot_number' })
//     lotNumber: string;

//     @Column({ name: 'serial_number' })
//     serialNumber: string;

//     @ManyToOne(() => Supplier)
//     @Column({ name: 'supplier_id' })
//     supplierId: number;

//     @Column({ name: 'purchase_price' })
//     purchasePrice: number;

//     @Column({ name: 'selling_price' })
//     sellingPrice: number;
// }