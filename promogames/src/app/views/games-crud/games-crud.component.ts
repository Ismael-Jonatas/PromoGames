import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-games-crud',
  templateUrl: './games-crud.component.html',
  styleUrls: ['./games-crud.component.css']
})
export class GamesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToGamesCreate(): void{
    this.router.navigate(['/games/create'])
  }

}
