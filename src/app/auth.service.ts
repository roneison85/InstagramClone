import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase';

export class AuthService {
    public cadastrarUsuario(usuario: Usuario): void {
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((response: any) => {
                console.log(response);
            })
            .catch((error: Error) => {
                console.log(error);
            })
    }
}