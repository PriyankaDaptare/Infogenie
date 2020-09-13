import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactDetails = [
    { name: 'Raghav Guarv', number: 7857497588 , jobTitle: 'Developer'},
    { name: 'Raman Sharma', number: 8857584895 , jobTitle: 'Developer'},
    { name: 'Pooja Shaha', number: 90876789578 , jobTitle: 'Developer'},
    { name: 'Priyanka Dange', number: 876903836 , jobTitle: 'Developer'},
    { name: 'Jay Bohra', number: 9364665748 , jobTitle: 'Manager'},
  ];
  contactNameDetails = [
    'Raghav Guarv', 'Raman Sharma', 'Pooja Shaha', 'Priyanka Dange', 'Jay Bohra'
   ];
   contactJobTitleDetails = [
    'Developer', 'Consulatant', 'HR', 'Node Developer', 'Manager'
   ]
  contacNumbertDetails = [
    '7857497588', '8857584895', '90876789578', '876903836', '9364665748'
   ];
   allContactDetails: any;
  constructor() { }

  ngOnInit(): void {
    this.allContactDetails = this.contactDetails;
  }

  applyFilter(filter: String) {
    this.contactDetails  = this.allContactDetails.filter(item => {
          if (item.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
            return true;
          }
            return false;
    }
    );
}

}
