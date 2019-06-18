import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyConverterService {

  constructor(private http: HttpClient) {

  }

  public getConversionRate(fromCurrency: string) {
    const apiUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${fromCurrency}_INR&compact=ultra`;
    return this.http.get(apiUrl);
  }
}


