import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // Método para iniciar sesión
  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/crud']);  // Redirigir al CRUD
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
    }
  }
}
