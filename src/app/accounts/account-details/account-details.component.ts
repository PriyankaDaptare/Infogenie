import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  companyDetails = {
    companyName: 'abb',
    primaryIndustry: 'Electrical Equipment,Component Manufacturing',
    address: 'F/222,Subhahnager,Thane (W)',
    revenue: '$18',
    phoneNumber: 7858599595,
    employeeSize: 250,
    website: 'www.google.com',
    sic: '36-Electronics',
    ownership: 'Corporation',
    naisc: 'Electric Equipment',
    linkedInUrl: 'https://linkedIn.com/company/abb',
    allIndustry: 'Manufacturing,Applicences',
    parentCompany: 'ABB ltd',
    allSIC: 'Demo Example'
  };

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onNextClick(){
    this.router.navigate(['/contact-details']);
  }
}
