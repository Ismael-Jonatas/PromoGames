import { Game } from './../games.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GamesReadTableDataSource } from './games-read-table-datasource';

@Component({
  selector: 'app-games-read-table',
  templateUrl: './games-read-table.component.html',
  styleUrls: ['./games-read-table.component.css']
})
export class GamesReadTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Game>;
  dataSource: GamesReadTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','preco'];

  constructor() {
    this.dataSource = new GamesReadTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
