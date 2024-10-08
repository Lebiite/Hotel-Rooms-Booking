import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';
import { NewBookingComponent } from './pages/newbooking/newbooking.component';
import { BookinglistComponent } from './pages/bookinglist/bookinglist.component';
import { BookingCalenderComponent } from './pages/bookingcalender/bookingcalender.component';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './pages/customer/customer.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'dashboard',
                component:DashboardComponent,
            },
            {
                path:'rooms',
                component:RoomsComponent,
            },
            {
                path:'new-booking',
                component:NewBookingComponent,
            },
            {
                path:'bookings',
                component:BookinglistComponent,
            },
            {
                path:'booking-calender',
                component:BookingCalenderComponent,
            },
            {
                path:'users',
                component:UsersComponent,
            },
            {
                path:'customers',
                component:CustomerComponent,
            },
        ]
    },
];

