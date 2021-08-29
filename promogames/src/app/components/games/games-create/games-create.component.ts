import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Game } from '../games.model';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-games-create',
  templateUrl: './games-create.component.html',
  styleUrls: ['./games-create.component.css']
})
export class GamesCreateComponent implements OnInit {

  game: Game = {
    nome:'',
    preco:0.0
  }

  constructor(private GamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createGames():void{
    this.GamesService.create(this.game).subscribe(()=>{
      this.GamesService.showMessage("Game Cadastrado !")
      this.router.navigate(['/games'])
    })
    

  }

  cancelGames():void{
    this.router.navigate(['/games'])

  }



}
