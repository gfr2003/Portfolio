import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  public slideIndex = 1;
  constructor() {}
  ngAfterViewInit() {
    const myContent = document.querySelector('#corpo');
    this.styleScrollbars(myContent);
  }
  ngOnInit() {

    // this.showSlides(this.slideIndex);
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
  // // Next/previous controls
  // public plusSlides(n) {
  //   this.showSlides((this.slideIndex += n));
  // }

  // // Thumbnail image controls
  // public currentSlide(n) {
  //   this.showSlides((this.slideIndex = n));
  // }

  // // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  // public showSlides(n) {
  //   let i;
  //   const slides = document.querySelectorAll<HTMLElement>('.mySlides');
  //   const dots = document.getElementsByClassName('dot');
  //   if (n > slides.length) {
  //     this.slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     this.slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = 'none';
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(' active', '');
  //   }
  //   slides[this.slideIndex - 1].style.display = 'block';
  //   dots[this.slideIndex - 1].className += ' active';
  // }

