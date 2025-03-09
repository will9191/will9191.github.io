import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { letsExternal } from '@ng-icons/lets-icons/regular';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ letsExternal })],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educations = [
    {
      img: 'https://unisagrado.edu.br/uploads/2008/institucional/estrutura_organizacional/topo-organizacional-provisorio.jpg',
      name: 'USC - Universidade do Sagrado Coração',
      course: 'Bacharelado em Ciência da Computação',
      startTime: 2024,
      endTime: 2027,
      link: 'https://unisagrado.edu.br/',
    },
    {
      img: 'https://imgs.search.brave.com/aidv7CsNLPxO2ZTuDK8H5BxyC6WaFqE4-un5NL81Ru4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ia3Bz/aXRlY3BzbmV3LmJs/b2IuY29yZS53aW5k/b3dzLm5ldC91cGxv/YWRzaXRlY3BzL3Np/dGVzLzEvMjAyMi8w/OC9jcHMtbG9nby1p/ZGVudGlkYWRlLmpw/Zw',
      name: 'ETEC Comendador João Rays',
      course: 'Técnico em Informática para Internet',
      startTime: 2021,
      endTime: 2023,
      link: 'https://www.cps.sp.gov.br/etecs/etec-comendador-joao-rays/',
    },
  ];
}
