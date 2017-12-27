import { Component, OnInit } from '@angular/core';

import { DicFishType } from './DicFishType';
import { FishingPlaceService } from './fishing-place.service';
import { DicFishKind } from './DicFishKind';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fishing-place',
  templateUrl: './fishing-place.component.html',
  styleUrls: ['./fishing-place.component.css']
})
export class FishingPlaceComponent implements OnInit {

    // Component properties
    allFishTypes: DicFishType[];
    allFishKinds: DicFishKind[];
    statusCode: number;
    //Create form
    fishingPlaceForm = new FormGroup({
        fishKindFormControlSelect: new FormControl('', Validators.required),
        fishTypeFormControlSelect: new FormControl('', Validators.required)
    });

  constructor(private fishingPlaceService: FishingPlaceService) { }

    ngOnInit(): void {
        this.getAllFishTypes();
        this.getAllFishKinds();
    }

    // Fetch all
    getAllFishTypes() {
        this.fishingPlaceService.getAllDicFishTypes()
            .subscribe(
                data => this.allFishTypes = data,
                errorCode =>  this.statusCode = errorCode);
    }

    // Fetch all
    getAllFishKinds() {
        this.fishingPlaceService.getAllDicFishKinds()
            .subscribe(
                data => this.allFishKinds = data,
                errorCode =>  this.statusCode = errorCode);
    }

    getAllFishTypeByKindId() {
        const fishTypeKindValue = this.fishingPlaceForm.get('fishKindFormControlSelect').value.trim();

        const onSelf = this.allFishKinds;
        let dicFishTypes;

        for (let i = 0; i < onSelf.length; ++i) {
            if (onSelf[i].fishKindId == fishTypeKindValue){
                dicFishTypes = onSelf[i].dicFishTypeSet;
                console.log(dicFishTypes);
            }
        }

        this.allFishTypes = dicFishTypes;
    }

}
