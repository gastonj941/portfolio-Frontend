import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyecto: Proyecto[] = [];

  constructor(private proyectoS: ProyectoService) { }
  isLogged = true;

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe({
        next: () => {
          this.cargarProyecto();
        }, error: () => {
          alert("No se pudo eliminar");
        }
      }
      )
    }
  }
}
