import { Component, OnInit } from '@angular/core';

import { FishType } from './fish-type';
import { FishingPlaceService } from './fishing-place.service';

@Component({
  selector: 'app-fishing-place',
  templateUrl: './fishing-place.component.html',
  styleUrls: ['./fishing-place.component.css']
})
export class FishingPlaceComponent implements OnInit {

    //Component properties
    allFishTypes: FishType[];
    statusCode: number;

  constructor(private fishingPlaceService: FishingPlaceService) { }

    ngOnInit(): void {
        this.getAllFishTypes();
    }

    //Fetch all
    getAllFishTypes() {
        this.fishingPlaceService.getAllDicFishTypes()
            .subscribe(
                data => this.allFishTypes = data,
                errorCode =>  this.statusCode = errorCode);
    }

}
