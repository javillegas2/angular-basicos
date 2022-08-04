import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    obtenerNombre (){
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        this.nombre = 'spiderman';
    }
    cambiarEdad(){
        this.edad= 25;
    }
}