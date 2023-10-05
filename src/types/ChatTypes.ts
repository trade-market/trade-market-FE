export interface chatStorageType {
  send: boolean;
  userId: string;
  message: any;
  time: Date | null;
}