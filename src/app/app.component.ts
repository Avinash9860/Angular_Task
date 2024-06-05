import { Component, OnInit } from '@angular/core';
import { NameDataService } from './Service/name-data.service';
interface DataEntry {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nameCounts: Record<string, number> = {};
  ngOnInit(): void {

    const data: DataEntry[] = this.nameDataService.getData();
    this.nameCounts = data.reduce((acc: Record<string, number>, entry: DataEntry) => {
      acc[entry.name] = (acc[entry.name] || 0) + 1;
      return acc;
    }, {});
   
  }

  constructor(private nameDataService: NameDataService){


  }
  getBackgroundColor(count: number): string {
    if (count > 0 && count < 3) {
      return 'red';
    } else if (count > 2 && count < 10) {
      return 'yellow';
    } else if (count >= 10) {
      return 'green';
    }
    return '';
  }
  
  title = 'AngularTask';
}
