import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { Character } from 'src/app/models/character';
import { DisneyApiService } from 'src/app/services/disney-api/disney-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  public displayedColumns: string[] = ['name', 'tvShows', 'videoGames', 'allies', 'enemies'];
  public gridState: State = {
    skip: 0,
    take: 50,
    filter: { logic: 'and', filters: [] },
    sort: [{ field: 'name', dir: 'asc' }],
  };
  public gridData: GridDataResult = {
    data: [],
    total: 0
  };

  public dataSource: Character[] = [];
  // dataSource$: any = of(this.dataSource) as any;
  public state = {
    page: 1,
    totalElements: null,
    count: 50
  };
  public isLoading = false;
  public totalCharacters = 0;
  public characters: any[] = [];
  public selectedCharacter: Character | undefined;

  constructor(private characterService: DisneyApiService) { }

  ngOnInit(): void {
    this.fetch()
  }

  public fetch(): void {
    this.isLoading = true;
    this.characterService.getCharacters(this.gridState.skip as number, this.gridState.take as number).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        console.error(res)
        this.gridData = {
          data: res.data,
          total: res.totalPages * res.count,
        };
        this.dataSource = res.data
        console.error(this.gridData)
      },
      error: (err: any) => {
        console.error(err)
        this.isLoading = false;
      }
    });
  }

  public dataStateChange(event: DataStateChangeEvent): void {
    console.error(event.sort)
    this.gridState.skip = event.skip;
    this.fetch();
  }

  public onNameFilterChange(value: any): void {
    if (value === '') {
      this.fetch();
    } else {
      this.fetchByName(value);
    }
  }

  private fetchByName(name: string): void {
    this.isLoading = true;
    this.characterService.filterCharacter(name).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.gridData = {
          data: res.data,
          total: res.count,
        };
      },
      error: (err: any) => {
        console.error(err)
        this.isLoading = false;
      }
    })
  }

  public onRowSelection(selection: any): void {
    const selectedData = selection.selectedRows[0].dataItem;
    this.selectedCharacter = selectedData;
  }
}