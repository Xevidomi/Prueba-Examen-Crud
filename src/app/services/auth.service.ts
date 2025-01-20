import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() { }

  // Método para simular el login (en un caso real, verificarías en un backend)
  login(username: string, password: string): boolean {
    // Aquí deberías verificar las credenciales (puedes hacer una llamada HTTP)
    if (username === 'admin' && password === 'admin123') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  // Método para hacer logout
  logout(): void {
    this.loggedIn = false;
  }
}
