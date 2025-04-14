import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown } from '@ng-icons/heroicons/outline';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  doc: string;
  deploy: string;
  techs: any; // Permite qualquer tipo de dado (array de números ou objetos)
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      heroChevronDown,
    }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  @Input() public project: any;

  constructor(private dialogRef: MatDialog) {
    this.getProjects();
  }

  openDialog(data: any) {
    this.dialogRef.open(PopupComponent, { data: data });
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
      title: 'Multi Taste',
      description: 'Web Management and Mobile for clients to make food orders',
      images: [
        'https://private-user-images.githubusercontent.com/99729211/433484375-013dc31d-eeab-46ae-8a3b-3f3361465958.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTIxMzcsIm5iZiI6MTc0NDY1MTgzNywicGF0aCI6Ii85OTcyOTIxMS80MzM0ODQzNzUtMDEzZGMzMWQtZWVhYi00NmFlLThhM2ItM2YzMzYxNDY1OTU4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE0VDE3MzAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI0MGYyZGMzNzcxZTM4MTBkOWExNGNmNjA5ZjA4ZDBiN2RmM2I4MzQ3YTE4ODU0N2UwYTBkM2Q5MGQ5NWQ0ZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.tC5ngGW-x7kkeT1AWqNJthGRcTMe3a6Xby1p09ujT5o',
        'https://private-user-images.githubusercontent.com/99729211/433484457-161c176d-0b13-4b60-8c51-5df813e08a14.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTIxMzcsIm5iZiI6MTc0NDY1MTgzNywicGF0aCI6Ii85OTcyOTIxMS80MzM0ODQ0NTctMTYxYzE3NmQtMGIxMy00YjYwLThjNTEtNWRmODEzZTA4YTE0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE0VDE3MzAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3YWJhNDM2MzFjOTUxMDRkYWZlNTUzZmUwMmZjNDAyY2FkNzI1ZTE1ODcxMzM2M2RmNDFlYTc0MDUxZjJiNTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.izkHqRf1IZbPou2I-wUxrCsTwDDhcqPZIBww226QEKc',
        'https://private-user-images.githubusercontent.com/99729211/433484538-336f6377-15b0-46ea-bf58-a7220fadeb2c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTIxMzcsIm5iZiI6MTc0NDY1MTgzNywicGF0aCI6Ii85OTcyOTIxMS80MzM0ODQ1MzgtMzM2ZjYzNzctMTViMC00NmVhLWJmNTgtYTcyMjBmYWRlYjJjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE0VDE3MzAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBjNjMxMjdkYmVhMzBhODE3ZTNhMDExMzY0NWEyOTcxMmZkYTdjZDJiZGJlMWIzZTU4ZmRiZmIxYzkwZGQzNDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KBYF83lV-9pODurliJH9Z9vibdJvbOk95nS_FySe3Xk',
        'https://private-user-images.githubusercontent.com/99729211/433484585-4bb88ae7-b82f-49a3-90e0-445ac6f38f5e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTIxMzcsIm5iZiI6MTc0NDY1MTgzNywicGF0aCI6Ii85OTcyOTIxMS80MzM0ODQ1ODUtNGJiODhhZTctYjgyZi00OWEzLTkwZTAtNDQ1YWM2ZjM4ZjVlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE0VDE3MzAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY3MDRiOTBhODMyYzYwMjk5MzcwN2M5MzBlZjUzMGFkYjAyMmQyZTk2NTk0NmRmYTBiNTcyNGMwNWZmNWM5YjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.oT6JYG_PSrEcmYA0t34dD9dwFu_at9uTZi1iowPlgyA',
        'https://private-user-images.githubusercontent.com/99729211/433484737-15e24012-c5ef-4f5a-a426-7e16728ecf12.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTIxMzcsIm5iZiI6MTc0NDY1MTgzNywicGF0aCI6Ii85OTcyOTIxMS80MzM0ODQ3MzctMTVlMjQwMTItYzVlZi00ZjVhLWE0MjYtN2UxNjcyOGVjZjEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE0VDE3MzAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBiYTg3ZGRiODhiMmNjNDdmNmNlNTAxNmI3YWZlYjM4NzNhZTUxMmE2NTkzNGJiMTE5MWNiYmY5NTViODE0NDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.GhIYFmMwhO0fyh05FujqtmmPgRMn9KKqpasAc-M_SpI',
        'https://private-user-images.githubusercontent.com/99729211/433484789-bb1a0f20-3254-47cf-b6ec-378c814335fb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTIxMzcsIm5iZiI6MTc0NDY1MTgzNywicGF0aCI6Ii85OTcyOTIxMS80MzM0ODQ3ODktYmIxYTBmMjAtMzI1NC00N2NmLWI2ZWMtMzc4YzgxNDMzNWZiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE0VDE3MzAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMyMzUwNGZjMmUxOWEwODZkYTM1ODcxMjgzNTNlZjkzZWQyOTM2MjQ2M2ExYzlkOTgyOWZlNjcxN2JlNTdkNjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hDWc4X6cJdGvs0t6_wPEUeS2ewXhI_h4rdQPX2p4o_w'
      ],
      doc: 'https://github.com/will9191/multi-taste',
      deploy: '',
      techs: [1, 2, 3, 4, 5, 6, 7, 20],
    },
    {
      id: 2,
      title: 'W Clothing',
      description:
        'The e-commerce system offers features like user authentication, product filtering, sorting, reviews, real-time payment updates, and efficient cart management. It also supports address handling and a favorites section.',
      images: ['assets/wclothing/deploy.png', 'assets/wclothing/code.png'],
      doc: 'https://github.com/will9191/ecommerce-doc',
      deploy: '',
      techs: [1, 2, 3, 4, 5, 6, 7, 8, 19, 20],
    },
    {
      id: 3,
      title: 'Empreguei',
      description:
        'Job board website to connect employers and job seekers. Companies post job openings with detailed requirements and benefits, while users can search and apply for jobs based job title and location.',

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
      img: 'assets/techs/java.svg',
      text: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    },
    {
      id: 2,
      name: 'Spring Boot',
      img: 'assets/techs/spring.svg',
      text: 'Spring Boot is a convention-over-configuration extension for the Spring Java platform intended to help minimize configuration concerns while creating Spring-based applications.',
    },
    {
      id: 3,
      name: 'Angular',
      img: 'assets/techs/angular.svg',
      text: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
    },
    {
      id: 4,
      name: 'TypeScript',
      img: 'assets/techs/typescript.svg',
      text: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.',
    },
    {
      id: 5,
      name: 'PostgreSQL',
      img: 'assets/techs/postgresql.svg',
      text: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    },
    {
      id: 6,
      name: 'Docker',
      img: 'assets/techs/docker.svg',
      text: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.',
    },
    {
      id: 7,
      name: 'HTML5',
      img: 'assets/techs/html.svg',
      text: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.',
    },
    {
      id: 8,
      name: 'Tailwind',
      img: 'assets/techs/tailwind.svg',
      text: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
    },
    {
      id: 9,
      name: 'CSS',
      img: 'assets/techs/css.svg',
      text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    },
    {
      id: 10,
      name: 'C#',
      img: 'assets/techs/csharp.svg',
      text: 'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    },
    {
      id: 11,
      name: 'ASP.NET',
      img: 'assets/techs/aspnet.svg',
      text: '.NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is mainly developed by Microsoft employees by way of the .NET Foundation, and released under an MIT License.',
    },
    {
      id: 12,
      name: 'JavaScript',
      img: 'assets/techs/javascript.svg',
      text: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
    },
    {
      id: 13,
      name: 'ReactJs',
      img: 'assets/techs/react.svg',
      text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.',
    },
    {
      id: 14,
      name: 'ExpressJs',
      img: 'assets/techs/express.svg',
      text: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    },
    {
      id: 15,
      name: 'MongoDB',
      img: 'assets/techs/mongodb.svg',
      text: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    },
    {
      id: 16,
      name: 'NodeJs',
      img: 'assets/techs/nodejs.svg',
      text: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.',
    },
    {
      id: 17,
      name: 'MySQL',
      img: 'assets/techs/mysql.svg',
      text: "MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter My, and 'SQL', the acronym for Structured Query Language.",
    },
    {
      id: 18,
      name: 'BootStrap',
      img: 'assets/techs/bootstrap.svg',
      text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    },
    {
      id: 19,
      name: 'AWS',
      img: 'assets/techs/aws.svg',
      text: 'Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling (a process that allows a client to use more computing in times of high application usage, and then scale down to reduce costs when there is less traffic). These cloud computing web services provide various services related to networking, compute, storage, middleware, IoT and other processing capacity, as well as software tools via AWS server farms.',
    },
    {
      id: 20,
      name: 'Sass',
      img: 'assets/techs/sass.svg',
      text: 'Sass (syntactically awesome stylesheets) is a stylesheet language originally conceived by Hampton Catlin and developed by Natalie Weizenbaum.[2][3] After its initial releases, Weizenbaum and Chris Eppstein continued to extend Sass with SassScript, a simple scripting language used in Sass files.',
    },
  ];
}
