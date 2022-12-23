import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea3',
  templateUrl: './tarea3.component.html',
  styleUrls: ['./tarea3.component.css']
})
export class Tarea3Component {

  title ="array"
  titulo= "FRAMEWORK ANGULAR"

//ADD CARRITO

cursos = ["Angular"]

addcurso(nombres:String){
  this.cursos.push(String(nombres));
}

}
