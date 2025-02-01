import { animate, state, style, transition, trigger, animateChild } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('transform-menu', [
      state('expand', style({
        height: '75px',
        backgroundColor: 'transparent',
        borderBottom: '1px solid var(--ftc-primary)',
        color: 'var(--ftc-primary)'
      })),
      state('collapse', style({
        height: '50px',
        backgroundColor: 'var(--ftc-primary)',
        borderBottom: 'none',
        color: 'var(--ftc-black)'
      })),
      transition('* => expand', animate('0.5s')),
      transition('* => collapse', animate('0.5s'))
    ]),
    trigger('transform-item', [
      state('expand', style({
        color: 'var(--ftc-primary)'
      })),
      state('collapse', style({
        color: 'var(--ftc-black)'
      }))
    ]),
  ]
})
export class MenuComponent {
  menuStatus = signal('expand');
  sections: string[] = [ 'firstSection' ,'skillsSection' ,'favProjSection' ,'contactSection']

  @HostListener("window:scroll", []) 
  onWindowScroll() {
    const wScroll = document.documentElement.scrollTop;
    if(document.documentElement.scrollTop > 100){
      this.menuStatus.set('collapse');
    } else {
      this.menuStatus.set('expand');
    }

    this.sections.map(s => this.applyActive(s));
  }

  public scrollTo(section: string){
    let sec = document.getElementById(section);
    if(sec !== null && sec.offsetTop !== undefined){
      window.scrollTo({top:(sec.offsetTop - 50)});
    }
  }

  private applyActive(section: string){
    const wScroll = document.documentElement.scrollTop;
    if((document.getElementById(section)?.offsetTop ?? 0) <= wScroll){
      document.querySelectorAll(".nav-link").forEach(i => {
        i.classList.remove("active");
      });
      document.querySelector('span[data-menu="'+section+'"]')?.classList.add("active");
    }
  }
}
