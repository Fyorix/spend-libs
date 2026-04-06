import { FileEntity, FileStatus } from '../../domain/entities/file.entity.js';
import { FileModel } from '../models/file.model.js';

export class FileMapper {
  public static toEntity(model: FileModel): FileEntity {
    return new FileEntity(
      model.userId,
      model.originalName,
      model.minioKey,
      model.mimeType,
      model.size,
      model.id,
      model.status as FileStatus
    );
  }

  public static toModel(entity: FileEntity): FileModel {
    const model = new FileModel();
    model.id = entity.getId()!;
    model.userId = entity.getUserId();
    model.originalName = entity.getOriginalName();
    model.minioKey = entity.getMinioKey();
    model.mimeType = entity.getMimeType();
    model.size = entity.getSize();
    model.status = entity.getStatus() as FileStatus;
    return model;
  }
}
