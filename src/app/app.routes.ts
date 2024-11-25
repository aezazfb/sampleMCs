import { Routes } from '@angular/router';
import { MainCalendarComponent } from './components/calendarComponent/mainCalendar.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from 'src/auth/guard.guard';
import { LayoutComponent } from './components/layouts/layout.component';
import { DefaultPageComponent } from './components/common/default-page/default-page.component';
import { PatientsComponentComponent } from './components/patients-component/patients-component.component';

export const routes: Routes = [
    {
        path:"", component:LoginComponent
    },
    // {
    //     path:"home", 
    //     component:LayoutComponent,
    //     canActivate: [AuthGuard]
    // },
    {
        path:"login", component:LoginComponent
    },
    // { path: 'home', component: IndexComponent, pathMatch: 'full',
    //     canActivate: [AuthGuard]
    // },
    {
        path:"home", component:LayoutComponent, canActivate:[AuthGuard],
        children:[
            {path:"", component: DefaultPageComponent},
            {path:"calendar", component:MainCalendarComponent},
            {path:"patients", component:PatientsComponentComponent},
        ]
    }
];
