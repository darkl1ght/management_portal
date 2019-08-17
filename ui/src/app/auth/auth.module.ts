import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';


const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'register',
        component: AuthComponent
    }
]);

@NgModule({
    imports: [
        authRouting,
        ReactiveFormsModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: []
})
export class AuthModule { }
