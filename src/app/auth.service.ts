import { Usuario } from './acesso/usuario.model';
import { Inject } from '@angular/core';

export class AuthService {
    public cadastrarUsuario(usuario: Usuario): void {
        console.log('Chegamos até aqui...');
    }
}