import { IExchangeSymbol } from "./exchange-symbol";

export interface IExchangeResponse{
    symbols: IExchangeSymbol[];
    result: number;
}