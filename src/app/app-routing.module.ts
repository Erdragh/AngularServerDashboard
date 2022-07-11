import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ConsoleComponent } from "./pages/console/console.component";

const appRoutes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "console",
      component: ConsoleComponent
    }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}