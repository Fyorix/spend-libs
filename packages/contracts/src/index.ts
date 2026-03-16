export * from './user/user.pb.js'

export type { RegisterRequest, DeleteUserRequest } from './user/user.command.pb.js';
export type { LoginRequest, GetUserRequest } from './user/user.query.pb.js';
export type { EmptyResponse, TokenResponse, UserResponse } from './user/user.responses.pb.js';

export {
  UserServiceClient,
  UserServiceController,
  UserServiceControllerMethods,
  USER_SERVICE_NAME
} from './user/user.services.pb.js';
