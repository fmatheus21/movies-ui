export class Paginator {
  totalElements!: number;
  totalPages!: number;
  size: number = 10;
  page: number = 0;
  numberOfElements!: number;
  first!: boolean;
  last!: boolean;
  number!: number;
  empty!: boolean;
  pagesOptions: number[] = [10, 20, 50];
}
