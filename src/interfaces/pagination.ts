export interface PaginationResponse<ContentType> {
    content: Array<ContentType>;
    total: number;
    isLastPage: boolean;
    page: number;
}