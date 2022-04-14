import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "posts",
    loadChildren: "../app/pokemon-list/"
  },
  {
    path: "king",
    loadChildren: "../app/king/king.module#KingModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}