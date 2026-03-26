export { User, USER_PACKAGE_NAME } from './user/user.pb.js';
export { File, FILE_PACKAGE_NAME } from './file/file.pb.js';
export { GEOLOCATION_PACKAGE_NAME, TransactionPoint, Coordinate } from './geolocation/geolocation.pb.js';

export type {
  RegisterRequest,
  DeleteUserRequest,
} from './user/user.command.pb.js';
export type {
  LoginRequest,
  GetUserRequest,
  VerifyTokenRequest,
} from './user/user.query.pb.js';
export type {
  EmptyResponse,
  TokenResponse,
  UserResponse,
  VerifyTokenResponse,
} from './user/user.responses.pb.js';

export type { UploadFileRequest, UploadMetadata, DeleteFileRequest } from './file/file.command.pb.js';
export type { GetFileRequest, GetUserFilesRequest } from './file/file.query.pb.js';
export type { FileResponse, FileListResponse } from './file/file.responses.pb.js';

export type { TrackTransactionRequest } from './geolocation/geolocation.command.pb.js';
export type { GetNearbyTransactionsRequest } from './geolocation/geolocation.query.pb.js';
export type { TrackTransactionResponse, GetNearbyTransactionsResponse } from './geolocation/geolocation.responses.pb.js';

export {
  UserServiceClient,
  UserServiceController,
  UserServiceControllerMethods,
  USER_SERVICE_NAME
} from './user/user.services.pb.js';

export {
  FileServiceClient,
  FileServiceController,
  FileServiceControllerMethods,
  FILE_SERVICE_NAME
} from './file/file.services.pb.js';

export {
  GeolocationServiceClient,
  GeolocationServiceController,
  GeolocationServiceControllerMethods,
  GEOLOCATION_SERVICE_NAME
} from './geolocation/geolocation.services.pb.js';

export {
  EventTag,
  Transaction,
  ACCOUNT_PACKAGE_NAME
} from './account/account.pb.js';

export type {
  CreateTransactionRequest,
  TransactionResponse,
  ListTransactionsRequest,
  ListTransactionsResponse
} from './account/account.query.pb.js';

export {
  AccountServiceClient,
  AccountServiceController,
  AccountServiceControllerMethods,
  ACCOUNT_SERVICE_NAME
} from './account/account.services.pb.js';

export enum MapMode {
  INDIVIDUAL = 'INDIVIDUAL',
  WEIGHTED = 'WEIGHTED'
}

export interface WeightedZone {
  id: string;
  latitude: number;
  longitude: number;
  weight: number;
  radius: number;
}
