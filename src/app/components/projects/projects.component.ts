import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
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

export interface Project {
  id: number;
  title: string;
  description: string[];
  images: string[];
  doc: string;
  deploy: string;
  techs: any; // Permite qualquer tipo de dado (array de números ou objetos)
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, NgIconComponent],
  viewProviders: [
    provideIcons({
      heroChevronDown,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor() {
    this.getProjects();
    console.log(this.projects);
  }
  javaImg = 'assets/techs/java.svg';
  eyeSvg = 'assets/eye.svg';
  infoSvg = 'assets/info.svg';
  devIcon = '</>';

  empregueiCodeImg = 'assets/empreguei/code.png';
  empregueiDeployImg = 'assets/empreguei/deploy.jpeg';

  getProjects() {
    // Criar um mapa de tecnologias para acesso rápido por ID
    const techMap = new Map(this.techs.map((t) => [t.id, t]));

    // Atualizar os projetos para incluir objetos inteiros de tecnologia
    this.projects = this.projects.map((project) => ({
      ...project,
      techs: project.techs.map((id: number) => techMap.get(id)), // Substitui os IDs pelos objetos completos
    }));

    return this.projects;
  }

  projects: Project[] = [
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
      techs: [1, 2, 3, 4, 5, 6, 7, 8, 19, 20],
    },
    {
      id: 2,
      title: 'Empreguei',
      description: [
        "'Empreguei' was a TCC project I worked on, where we developed a job board website to connect employers and job seekers. The platform allowed companies to post job openings with detailed requirements and benefits, while users could search and apply for jobs based on criteria like job title and location.",
        'Job seekers could filter results according to their preferences, making it easier to find relevant opportunities. The platform also featured a user dashboard to track application status.',
        
      ],
      images: ['assets/empreguei/deploy.jpeg', 'assets/empreguei/code.png'],
      doc: 'https://github.com/will9191/Empreguei',
      deploy: '',
      techs: [12, 13, 14, 15, 16, 7, 9],
    },
  ];

  techs = [
    {
      id: 1,
      name: 'Java',
      img: javaImg,
      text: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    },
    {
      id: 2,
      name: 'Spring Boot',
      img: springImg,
      text: 'Spring Boot is a convention-over-configuration extension for the Spring Java platform intended to help minimize configuration concerns while creating Spring-based applications.',
    },
    {
      id: 3,
      name: 'Angular',
      img: angularImg,
      text: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
    },
    {
      id: 4,
      name: 'TypeScript',
      img: typescriptImg,
      text: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.',
    },
    {
      id: 5,
      name: 'PostgreSQL',
      img: postgresqlImg,
      text: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    },
    {
      id: 6,
      name: 'Docker',
      img: dockerImg,
      text: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.',
    },
    {
      id: 7,
      name: 'HTML5',
      img: htmlImg,
      text: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.',
    },
    {
      id: 8,
      name: 'Tailwind',
      img: tailwindImg,
      text: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
    },
    {
      id: 9,
      name: 'CSS',
      img: cssImg,
      text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    },
    {
      id: 10,
      name: 'C#',
      img: csharpImg,
      text: 'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    },
    {
      id: 11,
      name: 'ASP.NET',
      img: aspnetImg,
      text: '.NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is mainly developed by Microsoft employees by way of the .NET Foundation, and released under an MIT License.',
    },
    {
      id: 12,
      name: 'JavaScript',
      img: javascriptImg,
      text: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
    },
    {
      id: 13,
      name: 'ReactJs',
      img: reactImg,
      text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.',
    },
    {
      id: 14,
      name: 'ExpressJs',
      img: expressImg,
      text: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    },
    {
      id: 15,
      name: 'MongoDB',
      img: mongodbImg,
      text: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    },
    {
      id: 16,
      name: 'NodeJs',
      img: nodejsImg,
      text: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.',
    },
    {
      id: 17,
      name: 'MySQL',
      img: mysqlImg,
      text: "MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter My, and 'SQL', the acronym for Structured Query Language.",
    },
    {
      id: 18,
      name: 'BootStrap',
      img: bootstrapImg,
      text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    },
    {
      id: 19,
      name: 'AWS',
      img: awsImg,
      text: 'Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.',
    },
    {
      id: 20,
      name: 'Sass',
      img: sassImg,
      text: 'Sass (syntactically awesome stylesheets) is a stylesheet language originally conceived by Hampton Catlin and developed by Natalie Weizenbaum.[2][3] After its initial releases, Weizenbaum and Chris Eppstein continued to extend Sass with SassScript, a simple scripting language used in Sass files.',
    },
  ];
}
