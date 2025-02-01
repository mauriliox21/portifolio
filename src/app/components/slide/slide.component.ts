import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  slideW = signal(0);
  sliderW = signal(0)
  viewLeft = signal(0);

  @Input({required: true, alias: "id"}) 
  slideId: string = "";

  @Input({required: true, alias: "images"}) 
  images: string[] = [];

  setDefault(): void {
    const slideCount = document.querySelectorAll('#'+this.slideId+' ul li').length;
	  const slideWidth = document.querySelector('#'+this.slideId+' ul li img')?.clientWidth ?? 0;
	  const slideHeight = document.querySelector('#'+this.slideId+' ul li img')?.clientHeight ?? 0;
	  this.sliderW.set(slideCount * slideWidth);
	
    document.querySelectorAll('#'+this.slideId+' ul li').forEach(i => i.setAttribute("style",`width: ${slideWidth}px; height: ${slideHeight}px;`));

    document.querySelector('#'+this.slideId+'')?.setAttribute("style",`width: ${slideWidth}px; height: ${slideHeight}px;`);
    
    this.slideW.set(slideWidth);
    this.viewLeft.set(slideWidth * -1);
    
    
    document.querySelector('#'+this.slideId+' ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft()}px;`);

    // document.querySelector('#slider')?.scrollTo({left: (this.slideW() * -1)});
    setTimeout(() => {
      const lastSlide = document.querySelector('#'+this.slideId+' ul li:last-child');
      if(lastSlide){
        document.querySelector('#'+this.slideId+' ul')?.prepend(lastSlide);
      }
    }, 500)

  }

  next(){
    // console.log((this.slideW() * -1));
    
    // document.querySelector('#slider ul')?.classList.add("transicao");
    // document.querySelector('#slider ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft() * 2}px;`);
    // setTimeout(() => {
    //   const firstSlide = document.querySelector('#slider ul li:first-child');
    //   if(firstSlide){
    //     document.querySelector('#slider ul')?.classList.remove("transicao");
    //     document.querySelector('#slider ul')?.appendChild(firstSlide);
    //     document.querySelector('#slider ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft()}px;`);
    //   }
    // }, 500)
    this.move(this.viewLeft() * 2);
  }

  prev(){
    this.move(0);
  }

  private move(moviment: number){
    console.log((this.slideW() * -1));
    
    document.querySelector('#'+this.slideId+' ul')?.classList.add("transicao");
    document.querySelector('#'+this.slideId+' ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${moviment}px;`);
    setTimeout(() => {
      const firstSlide = document.querySelector('#'+this.slideId+' ul li:first-child');
      if(firstSlide){
        document.querySelector('#'+this.slideId+' ul')?.classList.remove("transicao");
        document.querySelector('#'+this.slideId+' ul')?.appendChild(firstSlide);
        document.querySelector('#'+this.slideId+' ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft()}px;`);
      }
    }, 500)
  }
}
