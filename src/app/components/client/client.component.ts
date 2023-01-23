import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  position: number;
  clientName: string;
  clientSurname: string;
  contactNr: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, clientName: 'Chad', clientSurname: 'Silva', contactNr: '0738769658'},
  {position: 2, clientName: 'Naomi', clientSurname: 'Silva', contactNr: '0835755825'},
  {position: 3, clientName: 'Jose', clientSurname: 'Silva', contactNr: '0833066351'},
]

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
    displayedColumns: string[] = ['position', 'clientName', 'clientSurname', 'contactNr', 'actions'];
    dataSource = ELEMENT_DATA;
    showEditClient: boolean = false;
    subscription!: Subscription;
  
    constructor(private uiService:UiService) {
      this.subscription = this.uiService.onToggle2().subscribe
      (value => this.showEditClient = value)
    }
  
    toggleEditClient() {
      this.uiService.toggleEditClient();
    }
  
}
