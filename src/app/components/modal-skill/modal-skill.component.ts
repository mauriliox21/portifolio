import { Component, OnInit, signal } from '@angular/core';
import { Tech } from '../../model/tech.model';
import { TechObservableService } from './techObservableService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-skill.component.html',
  styleUrl: './modal-skill.component.scss'
})
export class ModalSkillComponent implements OnInit{
  
  public tech = signal<Tech|undefined>(undefined);

  constructor(private techObservableService: TechObservableService){}

  ngOnInit() {
    this.techObservableService.getTech().subscribe({
      next: (next) => {
        this.tech.set(next);
      }
    })
  }
}
