import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.page.html',
  styleUrls: ['./shops-list.page.scss'],
})
export class ShopsListPage implements OnInit {

  constructor(private router: Router) { }

  segment = 0;
  selectedSlide: any;
  sliderOptions = {
    initialSlide : 0,
    slidesPerView: 1,
    speed: 400,
  };

  unread() {

    console.log('my test works');

  }

  gotoRest1(){

    this.router.navigateByUrl('rest1');

  }

  gotoRest2(){

    this.router.navigateByUrl('login');

  }

  gotoRest3(){

    this.router.navigateByUrl('login');

  }

  test() {
    console.log('my test works');
  }

  delete() {
    console.log('my delete works');
  }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.selectedSlide.slideTo(this.segment);

  }


  async slideChanged(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    });
}

}
