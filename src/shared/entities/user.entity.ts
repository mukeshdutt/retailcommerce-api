import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn({name:"user_id"})
  userId: number;

  @Column({name:"username"})
  username: string;

  @Column({name:"email"})
  email: string;

  @Column({name:"password_hash"})
  passwordHash: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'is_verified' })
  isVerified: boolean;

  @Column({ name: 'current_status' })
  currentStatus: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  // Relationships
  @OneToOne(() => UserProfile, (userProfile) => userProfile.userId)
  @JoinColumn({ name: 'user_id' })
  userProfiles: UserProfile
}
