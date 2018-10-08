import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.style.scss'],
    templateUrl: './login.template.html'
})

export class LoginComponent {
    isInValidLogin: boolean = false;
    errorMessage: string;
}
