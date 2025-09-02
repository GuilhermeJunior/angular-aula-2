import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Carro } from '../../../models/carro';

@Component({
  selector: 'app-carrodetails',
  imports: [FormsModule],
  templateUrl: './carrodetails.component.html',
  styleUrl: './carrodetails.component.scss'
})
export class CarrodetailsComponent {

  carro: Carro = new Carro(0, "");

  salvar() {
    console.log("salvar")
  }

}
