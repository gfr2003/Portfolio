import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Pagination} from 'swiper/core';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked, AfterViewInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 70,
    pagination: true,
    setWrapperSize:true,
  }
  public slideIndex = 1;
  constructor() {}
  ngAfterContentChecked() {
    if(this.swiper) {this.swiper.updateSwiper({});}
  }
  ngAfterViewInit() {
    const myContent = document.querySelector('#corpo');
    this.styleScrollbars(myContent);
  }
  styleScrollbars(elmt: any) {
    const stylesheet = `
    ::-webkit-scrollbar {
      width: 9px;
      background: #0f0f0f;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 100px;
      border: 5px solid transparent;
      background-clip: content-box;
      background-color: #8070d4;
      background: #7456ff;
    }
    `;

    const styleElmt = elmt.shadowRoot.querySelector('style');

    if (styleElmt) {
      styleElmt.append(stylesheet);
    } else {
      const barStyle = document.createElement('style');
      barStyle.append(stylesheet);
      elmt.shadowRoot.appendChild(barStyle);
    }
  }


}
