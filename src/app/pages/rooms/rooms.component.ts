import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../servics/rooms.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  roomList:any []=[];
  roomObj: any;
  constructor(private roomSrv:RoomsService){}

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms(){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
      this.roomList = res.data;
    })
  }

  saveRooms(){
    this.roomSrv.saveUpdateRoom(this.roomList).subscribe((Res:any)=>{
      if(Res.result){
        alert('Data updated success');
      }else{
        alert('Res.messsage');
      }
    })
  }
  AddNewRoom(){
    const obj ={
      "roomId": 0,
      "roomName": "",
      "isAcAvailable": false,
      "roomCapacity": 0,
      "isActive": false,
      "roomTariff": 0,
      "extensionNo": ""
    }
    this.roomList.unshift(obj)
  }
  onDelete(id: number){
    this.roomSrv.deleteRoom(id).subscribe((res:any)=>{
      if(res.result){
        alert('Room Deleted success');
        this.getAllRooms();
      }else{
        alert(res.message)
      }
    })
  }
}
