import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Game } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://localhost:3001/games"
  static delete: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
    console.log(msg)
  }

  

  create(game: Game): Observable<Game>{
    return this.http.post<Game>(this.baseUrl,game)
  }

  read(): Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUrl)
  }

  readByID(id:string | null): Observable<Game>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Game>(url)
  }
  update(game: Game): Observable<Game>{
    const url = `${this.baseUrl}/${game.id}`
    return this.http.put<Game>(url,game)
  }

  delete(game: Game): Observable<Game>{
    const url = `${this.baseUrl}/${game.id}`
    return this.http.delete<Game>(url)
  }

}
