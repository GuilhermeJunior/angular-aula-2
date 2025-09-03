import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CarrodetailsComponent } from "../carrodetails/carrodetails.component";

@Component({
  selector: 'app-carrolist',
  imports: [RouterLink, CarrodetailsComponent],
  providers: [MdbModalService],
  templateUrl: './carrolist.component.html',
  styleUrl: './carrolist.component.scss'
})
export class CarrolistComponent {
carroEdit: Carro = new Carro(0, "");
retornoDetalhe(carro: Carro) {
  if (carro.id > 0) {
    let indice = this.lista.findIndex(x => { return x.id == carro.id });
    this.lista[indice] = carro;

  } else {
    this.lista.push(carro);
  }
 this.modalRef.close();

}
   lista: Carro[] = [];

   modalService = inject(MdbModalService); // serviço do modal
   @ViewChild('modalCarroDetalhe') modalDetalhe!: TemplateRef<any>;
   modalRef!: MdbModalRef<any>;

   constructor() {
    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

     this.lista.push(new Carro(1, "Siena"));
     this.lista.push(new Carro(2, "Gol"));
     this.lista.push(new Carro(3, "Civic"));
     this.lista.push(new Carro(4, "Sandero"));

    if (carroNovo) {
      carroNovo.id = 3939;
      this.lista.push(carroNovo);
    }

     if (carroEditado) {
     let indice = this.lista.findIndex(x => {
        return x.id == carroEditado.id;
      } );
      this.lista[indice] = carroEditado;
     }
   }

   deleteById(carro: Carro) {
    Swal.fire({
          title: "Tem certeza que deseja deletar o registro",
          icon: "warning",
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: 'Sim',
          denyButtonText: 'Não'
        }).then((result) => {
          if (result.isConfirmed) {
              let indice = this.lista.findIndex(x => { return x.id == carro.id;});
              this.lista.splice(indice, 1);
              Swal.fire({
                title: "Deletado com Sucesso!",
                icon: "success",
                confirmButtonText: 'Ok'
               });
          }
        });


   }

   new() {
    this.carroEdit = new Carro(0, "");
    this.modalRef =  this.modalService.open(this.modalDetalhe);
   }

   edit(carro: Carro) {
    console.log(carro);
    this.carroEdit = Object.assign({}, carro); // clonando para evitar referencia
    this.modalRef =  this.modalService.open(this.modalDetalhe);
   }
}
