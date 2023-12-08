import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-create-vacancy-details',
  templateUrl: './create-vacancy-details.component.html',
  styleUrls: ['./create-vacancy-details.component.scss']
})
export class CreateVacancyDetailsComponent {
  protected FilteredItems!: any[];

  //Valores para o formgroup
  protected skills!: string[];
  protected serniority: string | undefined;
  protected vacancyArea: string | undefined;
  protected modality: string | undefined;
  protected daysOfWeek: string | undefined;
  protected contract: string | undefined;
  protected period: string | undefined;
  protected shift: string | undefined;

  protected formDetails = new FormGroup({
    skills: new FormControl(),
    serniority: new FormControl(),
    vacancyArea: new FormControl(),
    modality: new FormControl(),
    daysOfWeek: new FormControl(),
    contract: new FormControl(),
    period: new FormControl(),
    shift: new FormControl(),
  })

  protected skillsList: Array<string> = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Vue.js',
    'Node.js', 'Express.js', 'Deno', 'Python', 'Django', 'Flask', 'FastAPI',
    'Ruby', 'Ruby on Rails', 'C#', 'ASP.NET', 'Swift', 'iOS Development',
    'Java', 'Spring Boot', 'Kotlin', 'Android Development',
    'PHP', 'Laravel', 'Symfony', 'CodeIgniter',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQLite', 'DynamoDB',
    'RESTful APIs', 'GraphQL', 'Apollo Server', 'Apollo Client', 'Prisma',
    'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SourceTree', 'GitKraken',
    'Visual Studio Code', 'Sublime Text', 'Atom', 'Eclipse', 'IntelliJ IDEA',
    'Docker', 'Kubernetes', 'Vagrant', 'Heroku', 'AWS', 'Azure', 'Google Cloud Platform',
    'CI/CD', 'Jenkins', 'Travis CI', 'CircleCI', 'GitHub Actions',
    'Agile', 'Scrum', 'Kanban', 'JIRA', 'Confluence', 'Trello',
    'Responsive Design', 'SASS', 'LESS', 'Bootstrap', 'Tailwind CSS', 'Materialize',
    'WebSockets', 'WebRTC', 'RxJS', 'Redux', 'Vuex', 'MobX', 'Ngrx',
    'Jest', 'Mocha', 'Chai', 'Cypress', 'Testing Library', 'Enzyme', 'Storybook',
    'Webpack', 'Rollup', 'Parcel', 'Babel', 'ESLint', 'Prettier', 'Husky',
    'OAuth', 'JWT', 'OpenID Connect', 'Authentication', 'Authorization',
    'Microservices', 'Serverless', 'Distributed Systems', 'Service Mesh',
    'Design Patterns', 'Clean Code', 'Code Review', 'Continuous Learning',
    'Problem Solving', 'Debugging', 'Agile Development', 'Pair Programming',
    'Version Control', 'Git Flow', 'GitHub Flow', 'Linux', 'Bash', 'Shell Scripting',
    'Machine Learning', 'Data Science', 'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch',
    'Big Data', 'Hadoop', 'Spark', 'Apache Flink', 'Blockchain', 'Smart Contracts',
    'Cryptocurrency', 'Solidity', 'AR/VR', 'Unity', 'Unreal Engine', 'Blender',
    'UI/UX Design', 'Figma', 'Sketch', 'Adobe XD', 'InVision',
    'Technical Writing', 'Blogging', 'Content Creation', 'Public Speaking',
    'Open Source Contribution', 'Community Building'
  ];

  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.skillsList as any[]).length; i++) {
      let skill = (this.skillsList as any[])[i];
      if (skill.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(skill);
      }
    }

    this.FilteredItems = filtered;
  }

  onSubmit() {
    if (this.formDetails.valid) {
      this.formDetails.get('skills')?.setValue(this.skills)
      console.log(this.formDetails.value)
    }
  }
}