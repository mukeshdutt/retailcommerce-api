import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  bio: string;

  @Column({ name: 'profile_image' })
  profileImage: string;

  @Column({ name: 'social_media_links' })
  socialMediaLinks: string;

  @Column({ name: 'last_login' })
  lastLogin: Date;

  @Column({ name: 'preferred_language' })
  preferredLanguage: string;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;

  // Define relationships here if needed
  // Example: One-to-One relationship with User entity
  // @OneToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;
}
