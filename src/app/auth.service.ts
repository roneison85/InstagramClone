import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase';

export class AuthService {
    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((response: any) => {

                delete usuario.senha;
                
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set( usuario );
            })
            .catch((error: Error) => {
                console.log(error);
            })
    }

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => console.log(resposta))
            .catch((error: Error) => console.log(error))
    }
}