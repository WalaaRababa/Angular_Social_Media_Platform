import { Component, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = {
    email: '',
    password: '',
    username: ''
  }
  errorMessage=signal<string[]>([])
  constructor(private auth: AuthService, private router:Router) { }

  submitUser(event: any) {
    event.preventDefault()
    console.log(this.user);
    this.auth.CreateUser(this.user).subscribe(res => {
      console.log(res);
      const token = (res as any).access_token
      localStorage.setItem('token', token)
      this.router.navigate(['/home'])
    }, error => {
      console.log(error.error.message);
this.errorMessage.set(error.error.message)
    })

  }


}
