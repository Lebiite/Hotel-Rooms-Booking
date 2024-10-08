import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../servics/rooms.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  userList: any []=[];
  userObj: any =  {
    "userId": 1,
    "userName": "",
    "password": "",
    "role": ""
  };

  constructor(private roomSr: RoomsService){

  }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.roomSr.getAllUsers().subscribe((Res:any)=>{
      this.userList = Res.data;
    })
  }

  onSaveUser(){
    this.roomSr.saveUpdateUser(this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert('User Created Success')
        this.getUsers();
      }else{
        alert('res.message')
      }
    })
  }
  onEdit(data:any){
    const strObj = JSON.stringify(data);
    this.userObj = JSON.parse(strObj);
  }
  onDelete(id: number){
    const isDelete = confirm('Are you sure you want to Delete');
    if(isDelete){
      this.roomSr.deleteUser(id).subscribe((res:any)=>{
        if(res.result){
          alert('User Deleted')
          this.getUsers();
        }else{
          alert(res.message)
        }
      })
    }
  }
}
