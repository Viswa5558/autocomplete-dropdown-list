import { Component, Input } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [FilterPipe]
})

export class DropdownComponent {

  
  selectedValue: string;
  expandOptions: boolean = false;
  @Input('dropdownOptions') dropdownOptions;

    selectOption(option) {
      this.selectedValue = option.label;
      this.expandOptions = false;
    }

    openOptions(e) {
      this.expandOptions = true;
    }

    clearOptions() {
      this.selectedValue = "";
    }

  }
