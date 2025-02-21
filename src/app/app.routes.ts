import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { StackPageComponent } from './pages/stack-page/stack-page.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            }, {
                path: 'projects',
                component: ProjectsPageComponent,
            }, {
                path: 'stack',
                component: StackPageComponent,
            },
        ]
    }
];
