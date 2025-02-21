import { Component } from '@angular/core';
import { ProjectComponent } from "../project/project.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown } from '@ng-icons/heroicons/outline';

const javaImg = 'assets/techs/java.svg';
const springImg = 'assets/techs/spring.svg';
const angularImg = 'assets/techs/angular.svg';
const typescriptImg = 'assets/techs/typescript.svg';
const postgresqlImg = 'assets/techs/postgresql.svg';
const dockerImg = 'assets/techs/docker.svg';
const htmlImg = 'assets/techs/html.svg';
const tailwindImg = 'assets/techs/tailwind.svg';
const cssImg = 'assets/techs/css.svg';
const csharpImg = 'assets/techs/csharp.svg';
const aspnetImg = 'assets/techs/aspnet.svg';
const javascriptImg = 'assets/techs/javascript.svg';
const reactImg = 'assets/techs/react.svg';
const expressImg = 'assets/techs/express.svg';
const mongodbImg = 'assets/techs/mongodb.svg';
const nodejsImg = 'assets/techs/nodejs.svg';
const mysqlImg = 'assets/techs/mysql.svg';
const bootstrapImg = 'assets/techs/bootstrap.svg';
const awsImg = 'assets/techs/aws.svg';
const sassImg = 'assets/techs/sass.svg';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, NgIconComponent], viewProviders: [(provideIcons({
    heroChevronDown
  }))],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  javaImg = 'assets/techs/java.svg';
  eyeSvg = 'assets/eye.svg';
  infoSvg = 'assets/info.svg';
  devIcon = '</>';

  empregueiCodeImg = 'assets/empreguei/code.png';
  empregueiDeployImg = 'assets/empreguei/deploy.jpeg';


  projects = [
    {
      id: 1,
      title: 'W Clothing',
      description: [
        'The e-commerce system offers features like user authentication, product filtering, sorting, reviews, real-time payment updates, and efficient cart management. It also supports address handling and a favorites section.',
        'Administrators can manage inventory, track orders, and access insights through a dedicated dashboard. The platform is designed for smooth operations and scalability.',
        'With a responsive design, it ensures an excellent experience on any device, making it a complete solution for online retail.',
      ],
      images: ['assets/wclothing/deploy.png', 'assets/wclothing/code.png'],
      doc: 'https://github.com/will9191/ecommerce-doc',
      deploy: '',
      techs: [
        javaImg,
        springImg,
        angularImg,
        typescriptImg,
        postgresqlImg,
        dockerImg,
        htmlImg,
        tailwindImg,
        awsImg,
        sassImg,
      ],
    },
    {
      id: 2,
      title: 'Empreguei',
      description: [
        "'Empreguei' was a TCC project I worked on, where we developed a job board website to connect employers and job seekers. The platform allowed companies to post job openings with detailed requirements and benefits, while users could search and apply for jobs based on criteria like job title and location.",
        'Job seekers could filter results according to their preferences, making it easier to find relevant opportunities. The platform also featured a user dashboard to track application status.',
        "An administrative panel was included for managing job postings, users, and other operations, ensuring the platform ran smoothly and content was well-organized. 'Empreguei' offered a practical and efficient solution for both employers and job seekers.",
      ],
      images: ['assets/empreguei/deploy.jpeg', 'assets/empreguei/code.png'],
      doc: 'https://github.com/will9191/Empreguei',
      deploy: '',
      techs: [
        reactImg,
        javascriptImg,
        nodejsImg,
        expressImg,
        htmlImg,
        cssImg,
        mongodbImg,
      ],
    },
  ];
}
