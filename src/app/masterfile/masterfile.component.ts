import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-masterfile',
  templateUrl: './masterfile.component.html',
  styleUrls: ['./masterfile.component.css']
})
export class MasterfileComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.toastr.toastrConfig.positionClass = 'toast-top-center'; 
  }

  showSuccess() {
    this.toastr.success( 'No errors found in the uploaded master.');
  
  


  }
  

}
