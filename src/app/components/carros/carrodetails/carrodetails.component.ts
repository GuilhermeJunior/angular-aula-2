import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-carrodetails',
  imports: [FormsModule],
  templateUrl: './carrodetails.component.html',
  styleUrl: './carrodetails.component.scss'
})
export class CarrodetailsComponent {

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  @Input("carro") carro: Carro = new Carro(0, "");
  @Output("retorno") retorno = new EventEmitter();

  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id)
    }
  }

  findById(id: number) {
    // busca no backend mockada
    let carroRetornado: Carro = new Carro(id, "Fiesta");
    this.carro = carroRetornado;
  }

  salvar() {
    if (this.carro.id > 0) {
    Swal.fire({
      title: "Editado com Sucesso!",
      icon: "success",
      confirmButtonText: 'Ok'
    });

    this.router2.navigate(['/admin/carros'], { state: { carroEditado: this.carro } });

    } else {
       Swal.fire({
        title: "Salvo com Sucesso!",
        icon: "success",
        confirmButtonText: 'Ok'
       });
    this.router2.navigate(['/admin/carros'], { state: { carroNovo: this.carro } });
    }

    this.retorno.emit(this.carro);
  }

}
