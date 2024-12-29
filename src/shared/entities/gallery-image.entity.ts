import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('gallery_images')
export class GalleryImage {
    
    @PrimaryGeneratedColumn({name: 'image_id'})
    imageId: number;

    @Column({ name:"title" })
    title: string;

    @Column({ name:"description" })
    description: string;

    @Column({ name:"image_url" })
    imageUrl: string;

    @Column({ name:"is_active", default: true })
    isActive: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
}