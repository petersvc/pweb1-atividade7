import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root',
  useClass: MensagemConsoleService // Certifique-se de adicionar esta linha no módulo
})
export class MensagemConsoleService extends IMensagem {
  info(mensagem: string): void {
    console.log(`INFO: ${mensagem}`);
  }

  sucesso(mensagem: string): void {
    console.log(`SUCESSO: ${mensagem}`);
  }

  erro(mensagem: string): void {
    console.error(`ERRO: ${mensagem}`);
  }

  override alerta(mensagem: string): void {
    alert(mensagem);
  }
}
