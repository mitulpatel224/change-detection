import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BikeComponent } from './with-tires/bike/bike.component';
import { CarComponent } from './with-tires/car/car.component';
import { WithTiresComponent } from './with-tires/with-tires.component';
import { AirPlaneComponent } from './with-wings/air-plane/air-plane.component';
import { HelicopterComponent } from './with-wings/helicopter/helicopter.component';
import { WithWingsComponent } from './with-wings/with-wings.component';
import { UsingCdrComponent } from './using-cdr/using-cdr.component';

const routes: Route[] = [
  {
    path: 'use-cdr',
    component: UsingCdrComponent
  },
  {
    path: 'cd-on-push',
    component: VehiclesComponent
  },
  {
    path: '**', redirectTo: 'cd-on-push', pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    WithWingsComponent,
    WithTiresComponent,
    HelicopterComponent,
    AirPlaneComponent,
    BikeComponent,
    CarComponent,
    ManageListComponent,
    UsingCdrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
