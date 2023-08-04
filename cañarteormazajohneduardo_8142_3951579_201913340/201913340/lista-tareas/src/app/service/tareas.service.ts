import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: string[] = [];

  constructor() { }

  agregarTarea (tarea:string){
  
  }

  obtenerTareas(){
    return this.tareas
  }

  eliminarTarea(index:number){
   this.tareas[index] = ""
    
  }



}
