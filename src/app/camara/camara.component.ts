import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  @ViewChild('renato') video
  @ViewChild('renato1') video1
  constructor() { }

  ngOnInit() {
    navigator.mediaDevices.getUserMedia({
       video: {
         facingMode: 'user'
       }
    }).then(stream => {
      this.video.nativeElement.srcObject = stream;
      this.video1.nativeElement.srcObject = stream
    })
  }

}