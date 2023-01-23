import { Component, Input, Output, EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {
  @Input() text!: string;
  showEditClient!: boolean;
  subscription!: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle2().subscribe
    (value => this.showEditClient = value)
  }

  onSubmit() {
  
  }

  @Output() btnClick = new EventEmitter();

onClick() {
  this.btnClick.emit();
  }
}

