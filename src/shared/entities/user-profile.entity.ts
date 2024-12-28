import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_profile')
export class UserProfile {

  @PrimaryGeneratedColumn({name:"user_profile_id"})
  user_profile_id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({name:"bio"})
  bio: string;

  @Column({ name: 'profile_image' })
  profileImage: string;

  @Column({ name: 'last_login' })
  lastLogin: Date;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;

  // Relationships
  @OneToOne(() => User, (user) => user.userId)
  user: User;
}
