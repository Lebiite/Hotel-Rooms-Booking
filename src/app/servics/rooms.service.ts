import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  

  private apiEndPoint: string = 'http://freeapi.miniprojectideas.com/api/HotelBooking/'
  constructor(private http:HttpClient) { }

  login(obj:any){
    const options = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "http://localhost:4200"
      })
    }
    const dataObject = {
      phone: obj.phone,
      password: obj.password
    }
    console.log(dataObject);
    return this.http.post(this.apiEndPoint + 'Login', dataObject, options);
  }
  getAllRooms(){
    return this.http.get(this.apiEndPoint + 'GetAllRooms',)
  }

  saveUpdateRoom(obj:any){
    return this.http.post(this.apiEndPoint + 'AddUpdateBulkRooms', obj);
  }

  deleteRoom(id:any){
    return this.http.delete(this.apiEndPoint + 'DeleteRoomByRoomId?roomId=' + id);
  }
  getAllCustomers(){
    return this.http.get(this.apiEndPoint + 'GetAllCustomers',)
  }

  getAllUsers(){
    return this.http.get(this.apiEndPoint + 'GetAllUsers',)
  }

  saveUpdateUser(obj:any){
    return this.http.post(this.apiEndPoint + 'AddUpdateUser', obj);
  }
  deleteUser(id:any){
    return this.http.delete(this.apiEndPoint + 'DeleteUserByUserId?userId=' + id);
  }

  createBooking(obj: any) {
    return this.http.post(this.apiEndPoint + 'bookroom', obj);
  }

  GetBookingsByMonth(month: number) {
    return this.http.get(this.apiEndPoint + 'GetBookingsByMonth?month='+month)
  }
}
