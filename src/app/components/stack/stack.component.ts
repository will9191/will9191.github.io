import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

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

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  constructor(private dialogRef: MatDialog) {}

  openDialog(data: any) {
    this.dialogRef.open(PopupComponent, { data: data });
  }

  primaryTechs = [
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
  ];

  secondaryTechs = [
    {
      id: 1,
      name: 'HTML5',
      img: htmlImg,
      text: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.',
    },
    {
      id: 2,
      name: 'Tailwind',
      img: tailwindImg,
      text: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
    },
    {
      id: 3,
      name: 'CSS',
      img: cssImg,
      text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    },
    {
      id: 4,
      name: 'C#',
      img: csharpImg,
      text: 'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    },
    {
      id: 5,
      name: 'ASP.NET',
      img: aspnetImg,
      text: '.NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is mainly developed by Microsoft employees by way of the .NET Foundation, and released under an MIT License.',
    },
    {
      id: 6,
      name: 'JavaScript',
      img: javascriptImg,
      text: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
    },
    {
      id: 7,
      name: 'ReactJs',
      img: reactImg,
      text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.',
    },
    {
      id: 8,
      name: 'ExpressJs',
      img: expressImg,
      text: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    },
    {
      id: 9,
      name: 'MongoDB',
      img: mongodbImg,
      text: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    },
    {
      id: 10,
      name: 'NodeJs',
      img: nodejsImg,
      text: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.',
    },
    {
      id: 11,
      name: 'MySQL',
      img: mysqlImg,
      text: "MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter My, and 'SQL', the acronym for Structured Query Language.",
    },
    {
      id: 12,
      name: 'BootStrap',
      img: bootstrapImg,
      text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    },
  ];
}
