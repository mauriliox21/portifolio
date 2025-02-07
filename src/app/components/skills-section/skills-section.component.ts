import { Component } from '@angular/core';
import { Tech } from '../../model/tech.model';
import { CommonModule } from '@angular/common';
import { TechObservableService as TechObservableService } from '../modal-skill/techObservableService';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  public techs: Tech[] = [
    {
      name: 'java',
      icon: 'assets/expirience/java.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: '2 anos',
        projects: [
          {
            description:'Cryptoalert - Back-end API do meu projeto Cryptoalert, que consiste em uma aplicação mobile para cadastrar alertas relativos a valores de criptomoedas',
            repository:'https://github.com/mauriliox21/cryptoalert'
          },
          {
            description:'Autorização Spring Boot - Consiste em um back-end que eu criei para praticar o uso de segregação por "roles" usando spring-security',
            repository:'https://github.com/mauriliox21/autorizacao_spring_boot'
          },
          {
            description:'Autenticação Spring Boot - Consiste em um back-end que eu criei para praticar o uso de autenticação com tokens JWT usando spring-security',
            repository:'https://github.com/mauriliox21/autenticacao_spring_security'
          },
        ]
      }
    },
    {
      name: 'spring boot',
      icon: 'assets/expirience/spring_boot.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: '2 anos',
        projects: [
          {
            description:'Cryptoalert - Back-end API do meu projeto Cryptoalert, que consiste em uma aplicação mobile para cadastrar e receber alertas relativos a valores de criptomoedas',
            repository:'https://github.com/mauriliox21/cryptoalert'
          },
          {
            description:'Autorização Spring Boot - Consiste em um back-end que eu criei para praticar o uso de segregação por "roles" usando spring-security',
            repository:'https://github.com/mauriliox21/autorizacao_spring_boot'
          },
          {
            description:'Autenticação Spring Boot - Consiste em um back-end que eu criei para praticar o uso de autenticação com tokens JWT usando spring-security',
            repository:'https://github.com/mauriliox21/autenticacao_spring_security'
          }
        ]
      }
    },
    {
      name: 'Angular',
      icon: 'assets/expirience/angular.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: '1 ano',
        projects: [
          {
            description:'Jogo da velha - Um projeto criado para praticar conceitos de compartilhamento de dados entre componentes ',
            repository:'https://github.com/mauriliox21/jogo-da-velha-angular'
          }
        ]
      }
    },
    {
      name: 'React Native',
      icon: 'assets/expirience/react_native.png',
      expirience: {
        type: 'ACADEMIC',
        time: '3 anos',
        projects: [
          {
            description:'Cryptoalert - Front-end do meu projeto Cryptoalert, que consiste em uma aplicação mobile para cadastrar e receber alertas relativos a valores de criptomoedas',
            repository:'https://github.com/mauriliox21/cryptoalert-mobile'
          },
          {
            description:'Controle de Gastos - Aplicação mobile que consiste em uma forma de armazenar e rastrear os meus gastos através de categorias',
            repository:'https://github.com/mauriliox21/controle-gastos'
          }
        ]
      }
    },
    {
      name: 'C#',
      icon: 'assets/expirience/csharp.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: '3 anos e 6 meses',
        projects: []
      }
    },
    {
      name: 'Git',
      icon: 'assets/expirience/git.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: 'mais de 5 anos',
        projects: []
      }
    },
    {
      name: 'HTML5',
      icon: 'assets/expirience/html5.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: 'mais de 5 anos',
        projects: []
      }
    },
    {
      name: 'CSS3',
      icon: 'assets/expirience/css3.png',
      expirience: {
        type: 'PROFESSIONAL',
        time: 'mais de 5 anos',
        projects: []
      }
    },
  ];

  constructor(private techObservableService: TechObservableService) { }

  public setTech(tech: Tech) {
    this.techObservableService.setTech(tech);
  }
}
