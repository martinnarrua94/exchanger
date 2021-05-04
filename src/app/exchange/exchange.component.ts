import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IExchangeSymbol } from './exchange-symbol';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  public symbols: IExchangeSymbol[] = [];
  public fromSymbol: IExchangeSymbol;
  public toSymbol: IExchangeSymbol;
  public amount: number;
  public result: number;

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.amount = 0;
    this.exchangeService.getSymbols().subscribe({
      next: response => {
        this.symbols = Object.values(response);
        this.fromSymbol = this.symbols.filter(x => x.code == 'BTC')[0];
        this.toSymbol = this.symbols.filter(x => x.code == 'USD')[0];
      }
    });
  }

  convertCurrency(){
    this.result = 0;
    this.exchangeService.convertCurrency(this.fromSymbol.code, this.toSymbol.code, this.amount).subscribe({
      next: response =>{
        this.result = response;
      }
    });
  }

  toggleSymbols(){
    let currentFromSymbol = this.fromSymbol;
    this.fromSymbol = this.toSymbol;
    this.toSymbol = currentFromSymbol;
    if (this.amount) this.convertCurrency();
  }

}
