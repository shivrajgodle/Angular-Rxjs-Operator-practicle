import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat, forkJoin, from, fromEvent, Observable, of, Subject } from 'rxjs';
import {map , tap , switchMap, take, first, takeWhile, takeLast, takeUntil, mergeMap, flatMap} from 'rxjs/operators';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})

export class OperatorComponent implements OnInit {

  
  constructor(private http: HttpClient) { }

  onstop = new Subject<void>();

  ngOnInit(): void {

    //10. from & of 

    // const person: Person = {
    //   name : 'shivraj'
    // };

    // const personPromise : Promise<Person> = Promise.resolve(person);
    // const personObs : Observable<Person> = from(personPromise);
    // personObs.subscribe(data => console.log(data));

    //9. Map / Tap

  //   const source = of('shivraj');

  //   source
  //   .pipe( 
  //     map(name => name.toUpperCase()),
  //     tap(name => console.log(name),
  //     ))
  //   .subscribe(data => console.log(data));

  // 8. share
  // This share helps us to avoid multiple http request , we can add it at service like this

  // return this.http.get(url).pipe(share());

  // 7. SwitchMap


  // const userObs = this.getusers();

  // const clientObs = this.getclients();

  // const combined  = userObs.pipe(
  //   switchMap(users => {
  //     return clientObs.pipe(
  //       tap(clients => {
  //         console.log("client",clients);
  //         console.log("user",users);
  //       }
  //       )
  //     )
  //   })
  // );

  // combined.subscribe();

  // 6. debounceTime
  // debounceTime waits for the time period mentioned and then calls the subscribe method

  // ex. return text$.pipe(debounceTime(500))

  // 5. distinctuntilchanged
  // distinctUntilChanged() Observable Only emit when the current value is different than the last

  // 4. Take
  // i) Take
  // ii) TakeUntil
  // iii) TakeWhile
  // iv) TakeLast

  // let counter = 0;
  // const source = fromEvent(document , 'click');
  // source.
  // pipe(takeWhile(()=> counter < 3))
  // .subscribe(data=> {
  //   console.log('clicked on document', counter)
  //   counter++;
  // } )

  //takeLast
  
  // const source = of(1,2,3,4)
  // source.
  // pipe(takeLast(2))
  // .subscribe(data=> {
  //   console.log('clicked on document',data)
  // } )

  //takeUntil

 
  //  const source = fromEvent(document , 'click')
  // source.
  // pipe(takeUntil(this.onstop))
  // .subscribe(()=> {
  //   console.log('clicked on document')
  // } )

  // 3. MergeMap / FlatMap (both are same)

  // const carUserObs : Observable<any> = this.getusers();

  // const carClientObs : Observable<any> = this.getclients();

  // const carObs : Observable<any> = carUserObs.pipe(
  //   mergeMap(user =>{
  //     return carClientObs.pipe(
  //       map(client =>{
  //         const car : any ={
  //           user : user,
  //           client : client
  //         };
  //         return car;
  //       })
  //     )
  //   })
  // );  

  // const carObs : Observable<any> = carUserObs.pipe(
  //   flatMap(user =>{
  //     return carClientObs.pipe(
  //       map(client =>{
  //         const car : any ={
  //           user : user,
  //           client : client
  //         };
  //         return car;
  //       })
  //     )
  //   })
  // );

  // carObs.subscribe(data => console.log(data))
  
  // 2. concat

  // const carUserObs : Observable<any> = this.getusers();

  // const carClientObs : Observable<any> = this.getclients();

  // const carObs = concat(carUserObs , carClientObs) 

  // carObs.subscribe(data => console.log(data))

  // 1. ForkJoin

  const carUserObs = this.getusers();

  const carClientObs = this.getclients();

  const carObs =  forkJoin(carUserObs , carClientObs)

  carObs.subscribe(data => console.log(data))


 
   }

  //  stop(){

  //   this.onstop.next();
  //   this.onstop.complete();
  //  }

   getusers() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
   }

   getclients() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
   }



}
function subscribe(arg0: (v: any) => void) {
  throw new Error('Function not implemented.');
}

export interface Person{
  name : string
}