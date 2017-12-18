import { Component, OnInit } from '@angular/core';

import { DicFishType } from './DicFishType';
import { FishingPlaceService } from './fishing-place.service';
import { DicFishKind } from './DicFishKind';

@Component({
  selector: 'app-fishing-place',
  templateUrl: './fishing-place.component.html',
  styleUrls: ['./fishing-place.component.css']
})
export class FishingPlaceComponent implements OnInit {

    //Component properties
    allFishTypes: DicFishType[];
    allFishKinds: DicFishKind[];
    statusCode: number;

  constructor(private fishingPlaceService: FishingPlaceService) { }

    ngOnInit(): void {
        this.getAllFishTypes();
        this.getAllFishKinds();
    }

    //Fetch all
    getAllFishTypes() {
        this.fishingPlaceService.getAllDicFishTypes()
            .subscribe(
                data => this.allFishTypes = data,
                errorCode =>  this.statusCode = errorCode);
    }

    //Fetch all
    getAllFishKinds() {
        this.fishingPlaceService.getAllDicFishKinds()
            .subscribe(
                data => this.allFishKinds = data,
                errorCode =>  this.statusCode = errorCode);
    }

}
