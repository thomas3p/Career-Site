import { Component, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit {

  private map: any;
  private marker: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([16.405325957042376, 102.83715841821677], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}{r}.png', {
      attribution: 'Map tiles by <a href="https://carto.com/">Carto</a>, ' +
                   'under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. ' +
                   'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ' +
                   'under <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY SA</a>.',
      subdomains: 'abcd',
      maxZoom: 19,
      style: 'light_all'
    }).addTo(this.map);

    this.marker = L.marker([16.405325957042376, 102.83715841821677]).addTo(this.map);
  }

  changeLocation(lat: number, lng: number, placeName: string): void {
    this.map.setView([lat, lng], 13);
    this.addMarker(lat, lng, placeName);
  }

  private addMarker(lat: number, lng: number, placeName: string): void {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }

    const popupContent = `
      <div class="popup">
        <h4>${placeName}</h4>
        <p>More information about jobs at ${placeName}.</p>
        <a class="see-jobs-link" href="/teams">See Jobs</a>
      </div>
    `;

    this.marker = L.marker([lat, lng]).addTo(this.map)
      .bindPopup(popupContent, {
        closeButton: false
      })
      .openPopup();
  }
}
