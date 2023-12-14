import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class ACESSOComponent {

  permissao: string = 'Administrador';

  public onLogando(): void {
    alert('Login realizado com sucesso!');
  }

}
