import { Injectable } from "@angular/core";
import { Http } from '@angular/http'

  @Injectable()
  export class CurrencyConverterService {

    constructor(private http: Http){

    }
    // currency converter api
    public apiUrl = "https://free.currencyconverterapi.com/api/v6/convert?q=USD_INR&&compact=ultra"

    public getConversionRate(){
        return this.http.get(this.apiUrl)
    }
  }
  
  
  