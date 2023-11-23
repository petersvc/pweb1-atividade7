import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { FormatarTelefonePipe } from './formatar-telefone.pipe';


@NgModule({
  declarations: [CpfPipe, FormatarTelefonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    FormatarTelefonePipe
  ]
})
export class PipesModule { }
