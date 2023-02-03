import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }} Hola mundo</h1>
    <h3>La base es: <strong> {{base}} </strong></h3>
    <button (click)="acumular(base)"> + {{base}}</button>
    <span>{{ numero }}</span>
    <Button (click)=" acumular(-base)"> -{{base}}</Button>
    `
})

export class ContadorComponent {
    title = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}