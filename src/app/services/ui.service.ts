import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
    private showAddClient: boolean = false;
    private subject = new Subject<any>();
    private subject2 = new Subject<any>();
    private showEditClient: boolean = false;


  constructor() { }

  toggleAddClient(): void {
    console.log(123)
    this.showAddClient = !this.showAddClient;
    this.subject.next(this.showAddClient)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleEditClient(): void {
    console.log(123)
    this.showEditClient = !this.showEditClient;
    this.subject2.next(this.showEditClient)
  }

  onToggle2(): Observable<any> {
    return this.subject2.asObservable();
  }
}
