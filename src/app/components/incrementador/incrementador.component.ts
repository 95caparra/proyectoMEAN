import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda: string = 'leyenda';
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {
  }

  onChanges(newValue: number) {

    if (newValue >= 100) {
      this.porcentaje = 100;
    }
    if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
  }

}
