export interface User {
  _id?: string;
  username: string;
  firstname: string;
  lastname: string;
  displayName: string;
  userImg: string;
  user_name: string;
  verifyToken: string | null;
  verifyTokenExpires: string | null;
  azureId: string;
  googleId: string;
  admin: boolean;
  verified: boolean;
  college?: string; // ObjectId as string, optional because not required in schema
  deactivated: boolean;
  createdAt?: string;
  updatedAt?: string;
}