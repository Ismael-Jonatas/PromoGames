import { Game } from './../games.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-update',
  templateUrl: './games-update.component.html',
  styleUrls: ['./games-update.component.css']
})
export class GamesUpdateComponent implements OnInit {

  game!: Game;

  constructor(private router:Router, private gameService:GamesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.gameService.readByID(id).subscribe(game=>{
      this.game = game
    })
  }

  updateGames(): void{
    this.gameService.update(this.game).subscribe(()=>{
      this.gameService.showMessage('Game Atualizado !')
      this.router.navigate(['/games'])
    })
  }

  cancelGames():void{
    this.router.navigate(['/games'])

  }
}
