export type APIResponse<T = null> = {
   statusCode: number;
   success: boolean;
   message: string;
   data: T;
};
