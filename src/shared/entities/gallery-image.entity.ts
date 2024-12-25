import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('gallery_images')
export class GalleryImage {
    
    @PrimaryGeneratedColumn({name: 'image_id'})
    image_id: number;

    @Column({ name:"title" })
    title: string;

    @Column({ name:"description" })
    description: string;

    @Column({ name:"image_url" })
    image_url: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updated_at: Date;
}