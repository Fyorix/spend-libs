import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('files')
export class FileModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  originalName: string;

  @Column()
  minioKey: string;

  @Column()
  mimeType: string;

  @Column()
  size: number;

  @Column()
  status: string;
}
