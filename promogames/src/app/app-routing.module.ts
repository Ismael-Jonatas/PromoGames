import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {GamesCrudComponent} from './views/games-crud/games-crud.component';
import {GamesCreateComponent} from './components/games/games-create/games-create.component'
import { GamesUpdateComponent } from './components/games/games-update/games-update.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"games",
  component:GamesCrudComponent
},
{
  path: "games/create",
  component: GamesCreateComponent
},
{
  path: "games/update/:id",
  component: GamesUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
