import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomsService } from '../../servics/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:
   [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  loginObj: any = {
    identifier: "",
    password: "",
  };
  constructor(private roomSrv: RoomsService,private router: Router){

  }

  onLogin(){
    this.roomSrv.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem('hotelUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }else{
        alert('Check User Credentials');
      }
    },
  error=>{

  });
  }
}
