import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('subscribers')
export class Subscriber {

    @PrimaryGeneratedColumn({name: 'subscriber_id'})
    subscriberId: number;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'subscribed_at' })
    subscribedAt: Date;

    @Column({ name: 'is_active' })
    isActive: boolean;
}