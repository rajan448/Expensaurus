import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators'



@Injectable()
export class GetExpensesService {

public step: number = 10

constructor(private db: AngularFireDatabase){

}
public getExpenses(){
    return this.db.list('expenses').valueChanges()
}

public fetchRecords(end){
    if(end){
        return this.db.list('expenses', 
        ref => ref.orderByChild('id')
            .startAt(end - this.step + 1)
            .endAt(end)).valueChanges()
    }
}

public getLastIndex(){
    return this.db.list('expenses', 
        ref => ref.limitToLast(1)
    ).valueChanges()
}
 
}