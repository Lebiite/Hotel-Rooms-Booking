import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../servics/rooms.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  customerList: any []=[];
  constructor(private roomSr: RoomsService){}


  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.roomSr.getAllCustomers().subscribe((res:any)=>{
      this.customerList = res.data;
    })
  }
  onDelete(){

  }
}
