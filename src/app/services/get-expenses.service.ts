import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators'



@Injectable()
export class GetExpensesService {

public indexer$ = new Subject<any>();

constructor(private db: AngularFireDatabase){

}
public getExpenses(){
    return this.db.list('expenses').valueChanges()
}

public getLastIndex(){
    return this.db.list('expenses', 
        ref => ref.limitToLast(1)
    )
}



 
}