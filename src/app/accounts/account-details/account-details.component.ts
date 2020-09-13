import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  companyDetails = {
    companyName: 'abb',
    primaryIndustry: 'Electrical Equipment,Component Manufacturing',
    address: 'ahdaajb',
    revenue: '$18',
    phoneNumber: 7858599595,
    employeeSize: 250,
    website: 'www.google.com',
    sic: 'hjsdhisudk',
    ownership: 'Corporation',
    naisc: 'jhgsadsds',
    linkedInUrl: 'https',
    allIndustry: 'Manufacturing,Applicences',
    parentCompany: 'ABB ltd',
    allSIC: 'hsddskjk'
  };

  constructor() { }


  ngOnInit(): void {
  }
}
