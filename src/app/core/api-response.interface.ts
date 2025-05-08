export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors?: string[];
  metadata?: Map<string, uknown>;
  timestamp: string;
}
