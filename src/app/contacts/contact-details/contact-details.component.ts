import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactDetails = [
    { name: 'Raghav Guarv', number: 7857497588 , jobTitle: 'Developer'},
    { name: 'Raman Sharma', number: 8857584895 , jobTitle: 'Consulatant'},
    { name: 'Pooja Shaha', number: 90876789578 , jobTitle: 'HR'},
    { name: 'Priyanka Dange', number: 876903836 , jobTitle: 'Node Developer'},
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
  isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.allContactDetails = this.contactDetails;
  }

  /* Search by Name or job title */
  applyFilter(filter: String) {
    this.isLoading = true;
    this.contactDetails  = this.allContactDetails.filter(item => {
          if (item.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
          item.jobTitle.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
            this.isLoading = false;
            return true;
          }
            return false;
    }
    );
 }

  onBackClick(){
  this.router.navigate(['/account-details']);
 }
}
