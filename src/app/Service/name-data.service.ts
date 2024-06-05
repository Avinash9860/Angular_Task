import { Injectable } from '@angular/core';
interface DataEntry {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class NameDataService {

  constructor() {

    
   }
   getData(): DataEntry[] {
    return [
      { name: 'AVINASH' },
      { name: 'DESHMUKH' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },
      { name: 'DESHMUKH' },
      { name: 'NAGPUR' },
      { name: 'NEML' },
      { name: 'NEML' },
      { name: 'AVINASH' },
      { name: 'NAGPUR' },
      { name: 'NEML' },
      { name: 'AVINASH' },
      { name: 'NEML' },
      { name: 'NAGPUR' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },
      { name: 'AVINASH' },

    ];
  }
}
