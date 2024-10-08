import { Component, NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  loggedUserData:any;
  constructor(private router: Router){
    const localData = localStorage.setItem('hotelUser', '');
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogOff(){
    localStorage.removeItem('hotelUser');
    this.loggedUserData  = undefined;
    this.router.navigateByUrl('/login')
  }
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }