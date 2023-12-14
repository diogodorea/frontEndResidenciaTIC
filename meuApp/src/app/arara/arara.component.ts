import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class ARARAComponent {

nome: string = 'Arara';

url1: string = 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg';

nome2: string = 'Arara Azul';

public clickBotao(): void {
  alert('Clicou no botão!');
}
}

