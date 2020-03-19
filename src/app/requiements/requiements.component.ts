import { Component, OnInit } from '@angular/core';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-requiements',
  templateUrl: './requiements.component.html',
  styleUrls: ['./requiements.component.scss']
})
export class RequiementsComponent implements OnInit {
  constructor(private service:RequirementService) { }

  ngOnInit() {
  this.getRequirements()
  }




  getRequirements() {
    this.service.getServiceData()
      .subscribe((value) =>console.log(value));
  }


}
