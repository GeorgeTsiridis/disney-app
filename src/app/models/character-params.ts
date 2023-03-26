export interface CharacterParams {
  filter: string;
  sortDirection: 'asc' | 'desc'| '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
}
