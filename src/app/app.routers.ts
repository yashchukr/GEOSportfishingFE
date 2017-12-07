import { Routes } from "@angular/router";

import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import {ArticleComponent} from './components/article/article.component';

export const AppRouters: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
    {
    path: '',
    component: LayoutComponent,
    children: [{
        path: 'login',
        component: LoginComponent
    },{
        path: 'registration',
        component: RegistrationComponent
    },{
        path: 'home',
        component: HomeComponent
    },{
        path: 'article',
        component: ArticleComponent
    }
    ]
},{
    path: '**',
        redirectTo: 'home'
}]