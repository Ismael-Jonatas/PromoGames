import { Component, OnInit } from '@angular/core';
import { Game } from '../games.model';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-games-read',
  templateUrl: './games-read.component.html',
  styleUrls: ['./games-read.component.css']
})
export class GamesReadComponent implements OnInit {

  games!: Game[]
  displayedColumns = ['id','nome','preco','acao']

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.read().subscribe( games =>{
      this.games = games;

    })
  }  

  alertDelete(game: Game):void{
    if(window.confirm("Deseja realmente deletar este Game ?")){
      this.gamesService.delete(game).subscribe(()=>{
        this.gamesService.showMessage("Deletado com sucesso")
        this.ngOnInit()
      })
    }
  }

}

