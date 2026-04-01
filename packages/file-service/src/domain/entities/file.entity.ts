export enum FileStatus {
  UPLOADING = 'UPLOADING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}


export class FileEntity {
  private id?: string;
  private userId!: string;
  private originalName!: string;
  private minioKey!: string;
  private mimeType!: string;
  private size!: number;
  private status?: FileStatus;

  constructor(userId: string, originalName: string, minioKey: string, mimeType: string, size: number, id?: string, status?: FileStatus) {
    this.id = id;
    this.userId = userId;
    this.originalName = originalName;
    this.minioKey = minioKey;
    this.mimeType = mimeType;
    this.size = size;
    this.status = status;
  }

  public getId(): string | undefined {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getOriginalName(): string {
    return this.originalName;
  }

  public getMinioKey(): string {
    return this.minioKey;
  }

  public getMimeType(): string {
    return this.mimeType;
  }

  public getSize(): number {
    return this.size;
  }

  public getStatus(): FileStatus | undefined {
    return this.status;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setStatus(status: FileStatus): void {
    this.status = status;
  }
}
