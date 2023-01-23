import { Component, Output, EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
name!: string;
surname!: string;
contact!: string;
showAddClient!: boolean;
subscription: Subscription;


constructor(private uiService: UiService) {
  this.subscription = this.uiService.onToggle().subscribe
  (value => this.showAddClient = value)
}
onSubmit() {
  
}

@Output() btnClick = new EventEmitter();

onClick() {
  this.btnClick.emit();
  }

}
