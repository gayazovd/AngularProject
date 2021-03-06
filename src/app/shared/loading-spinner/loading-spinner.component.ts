import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  public isLoading: boolean = false;

  constructor(private load: LoadingService) { }

  ngOnInit() {
    this.load.isLoad.subscribe(value => this.isLoading = value);
  }

}
