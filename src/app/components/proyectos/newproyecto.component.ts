import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {
  nombre: string;
  descripcion: string;
  url: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.url);
    this.proyectoS.save(proyecto).subscribe({
      next: () =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, error: () =>{
        alert("falló");
        this.router.navigate(['']);
      }
    }
    )
  }
}
