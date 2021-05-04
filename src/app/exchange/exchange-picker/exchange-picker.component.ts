import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExchangeSymbol } from '../exchange-symbol';

@Component({
  selector: 'app-exchange-picker',
  templateUrl: './exchange-picker.component.html',
  styleUrls: ['./exchange-picker.component.css']
})
export class ExchangePickerComponent implements OnInit {

  @Input() title: string;
  @Input() symbols: IExchangeSymbol[];
  @Input() symbol: IExchangeSymbol;
  @Output() symbolChange = new EventEmitter<IExchangeSymbol>();
  
  constructor() { }

  ngOnInit(): void {
  }

  symbolChanged(): void {
    this.symbolChange.emit(this.symbol);
  }
}
