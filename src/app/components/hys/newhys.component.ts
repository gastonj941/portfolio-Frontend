import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe({
      next: () => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, error:() =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    }
    )
  }
}
