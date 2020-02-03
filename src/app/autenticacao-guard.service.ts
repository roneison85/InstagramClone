import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {
    
    constructor(private auth: AuthService){}

    canActivate(): boolean {
        return this.auth.autenticado();
    }
}