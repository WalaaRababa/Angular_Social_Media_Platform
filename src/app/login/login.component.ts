import { Component, signal } from '@angular/core';
import { FormComponent } from '../components/form/form.component';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: AuthService) { }
  receivedFormData: { email: string; password: string; } | undefined;
  messageError = signal<string>('')
  handleFormData(data: { email: string, password: string }) {
    this.receivedFormData = data;
    console.log('Received form data:', this.receivedFormData);
    this.auth.loginUser(this.receivedFormData).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error.error.message);
      error.error.message ? this.messageError.set(error.error.message) : this.messageError.set('error while logging ')

    }
    )
  }
  handelLogin() {

  }
}
