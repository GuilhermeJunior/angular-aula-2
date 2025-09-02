import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrolist',
  imports: [RouterLink],
  templateUrl: './carrolist.component.html',
  styleUrl: './carrolist.component.scss'
})
export class CarrolistComponent {
   lista: Carro[] = [];

   constructor() {
     this.lista.push(new Carro(1, "Siena"));
     this.lista.push(new Carro(2, "Gol"));
   }

   deletar() {

   }
}
