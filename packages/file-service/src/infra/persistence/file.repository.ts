/* eslint-disable @typescript-eslint/no-unused-vars */
import { FileEntity } from '../../domain/entities/file.entity.js';
import { IFileRepository } from '../../domain/core/ports/file.repository.js';

export class TypeOrmFileRepository implements IFileRepository {
  async save(file: FileEntity): Promise<FileEntity> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<FileEntity | null> {
    throw new Error('Method not implemented.');
  }
  async findByUserId(userId: string): Promise<FileEntity[]> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
