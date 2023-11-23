import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarTelefone'
})
export class FormatarTelefonePipe implements PipeTransform {
  transform(telefone: string): string {
    const telefoneNumerico = telefone.replace(/\D/g, '');

    if (telefoneNumerico.length === 9) {
      return `${telefoneNumerico.substr(0, 5)}-${telefoneNumerico.substr(5, 4)}`;
    } else if (telefoneNumerico.length === 11) {
      const ddd = telefoneNumerico.substr(0, 2);
      return `(${ddd}) ${telefoneNumerico.substr(2, 5)}-${telefoneNumerico.substr(7, 4)}`;
    } else if (telefoneNumerico.length === 12) {
      const ddd = telefoneNumerico.substr(0, 2);
      return `(${ddd}) ${telefoneNumerico.substr(2, 5)}-${telefoneNumerico.substr(7, 4)}`;
    } else {
      // Caso contrário, retornar o mesmo valor que entrou
      return telefone;
    }
  }
}
