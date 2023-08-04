import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/service/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent  implements OnInit {

  constructor() { }


  eliminarTarea(index:number){
    
  }

  ngOnInit() {}

}
