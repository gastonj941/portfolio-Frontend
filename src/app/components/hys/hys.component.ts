import { Component } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  skill: Skill[] = [];

  constructor(private skillS: SkillService) { }
  isLogged = true;
  
  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe({
        next: () => {
          this.cargarSkills();
        }, error: () => {
          alert("No se pudo borrar la skill");
        }
      }
      )
    }
  }
}
