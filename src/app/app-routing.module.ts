import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./deck/deck.module').then(m => m.DeckModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled', useHash: false,  enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
