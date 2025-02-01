import { Component, signal } from '@angular/core';
import { SlideComponent } from "../slide/slide.component";

@Component({
  selector: 'app-fav-proj-section',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './fav-proj-section.component.html',
  styleUrl: './fav-proj-section.component.scss'
})
export class FavProjSectionComponent{
  // slideW = signal(0);
  // sliderW = signal(0)
  // viewLeft = signal(0);

  // setDefault(): void {
  //   const slideCount = document.querySelectorAll('#slider ul li').length;
	//   const slideWidth = document.querySelector('#slider ul li img')?.clientWidth ?? 0;
	//   const slideHeight = document.querySelector('#slider ul li img')?.clientHeight ?? 0;
	//   this.sliderW.set(slideCount * slideWidth);
	
  //   document.querySelectorAll('#slider ul li').forEach(i => i.setAttribute("style",`width: ${slideWidth}px; height: ${slideHeight}px;`));

  //   document.querySelector('#slider')?.setAttribute("style",`width: ${slideWidth}px; height: ${slideHeight}px;`);
    
  //   this.slideW.set(slideWidth);
  //   this.viewLeft.set(slideWidth * -1);
    
    
  //   document.querySelector('#slider ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft()}px;`);

  //   // document.querySelector('#slider')?.scrollTo({left: (this.slideW() * -1)});
  //   setTimeout(() => {
  //     const lastSlide = document.querySelector('#slider ul li:last-child');
  //     if(lastSlide){
  //       document.querySelector('#slider ul')?.prepend(lastSlide);
  //     }
  //   }, 500)

  // }

  // next(){
  //   console.log((this.slideW() * -1));
    
  //   document.querySelector('#slider ul')?.classList.add("transicao");
  //   document.querySelector('#slider ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft() * 2}px;`);
  //   setTimeout(() => {
  //     const firstSlide = document.querySelector('#slider ul li:first-child');
  //     if(firstSlide){
  //       document.querySelector('#slider ul')?.classList.remove("transicao");
  //       document.querySelector('#slider ul')?.appendChild(firstSlide);
  //       document.querySelector('#slider ul')?.setAttribute("style",`width: ${this.sliderW()}px;left:${this.viewLeft()}px;`);
  //     }
  //   }, 500)
  // }

  // prev(){}

}
