import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    markers: marker[] = [
        {
            lat: 50.552707419200665,
            lng: 30.513153076171875,
            label: 'Плотва',
            draggable: false
        },
        {
            lat: 50.4330171113566,
            lng: 30.574951171875,
            label: 'Окунь',
            draggable: false
        },
        {
            lat: 50.333572,
            lng: 30.616350,
            label: 'Карп',
            draggable: false
        }
    ];

    mapClicked($event: any) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
        console.log($event.coords.lat + ' ' + $event.coords.lng);
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }

    markerDragEnd(marker: marker, $event: any) {
        console.log('dragEnd', marker, $event);
    }

    constructor(){
        console.log('called map view');
    }

    ngOnInit() {
    }

  // initial center position for the map
  //title = 'Київ';
  lat: number = 50.431782;
  lng: number = 30.516382;
   /**
   while(markers) {
     this.lat = 51.431782;
     this.lng = 31.516382;
     console.log('Work while' + this.lat + ' ' + this.lng);
   };*/

  // google maps zoom level
  zoom = 10;
}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
};

