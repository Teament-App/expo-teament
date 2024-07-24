export interface ApiResponse<T, P> {
  T: P;
}

export interface ApiResponseWithData<T> {
  data: T;
}
