
Ionic: One code base (Html + js + css ) -> iOS , Android, Progressive web app and 
	Web components , Capacitor, Ionic CLI

npm install -g ionic //install ionic cli 
ionic -v
cd location: ionic start
navigate to project location : ionic serve // include angular cli <Ionic provides all features of angular cli>

//Short cut: Angular Essentials

Angular:
    npm install -g @angular/cli //install angular cli
    ng --version
    ng new myApps // creating new project
    ng serve // start application 

The first file is : main.ts typescript 

NgModule is bundle of components and features:
    Each components should be registered in component.module.ts

Property Binding: @Input() // Angular scans all component registered in module.ts 
                  @Output() EventEmitter<>(); from @angular/core


ngFor and Iterables: defining arrays --> <div *ngFor="let b of students">
                                                  {{b.name }} //String interpolation
ngIf and Else : <li *ngIf="b.name == 'Mani'">Yeah, I exist.</li>

        EX: <div *ngIf="myArr; then tmpl1 else tmpl2"></div>
              <ng-template #tmpl1>I'm here</ng-template>
              <ng-template #tmpl2>I'm not here</ng-template>

Property binding : [] -> [personList] = "persons"
String interpolation: {{}} ->{{person}} 
Event binding : () -> (click) = "onCreatePerson()"
TwoWay binding : [(ngModel)] = "personEnteredName"

#personNameEl : local refrence that can be used in same template 
FormsModule : -> unlock many features 
    [(NgModule)]

Passing Data around with Customs Events:
Implementing routing: app-routing.module.ts

Setting up Services: @Injectable()
    instead of provider[PersonService] in app.module.ts ->
            @Injectable({ providedIn: 'root'})

Using services with dependency Injection :
    no more @Input property binding -> constructor() method : while initializing object it automatically runs

Component Lifecycle Hook :
    OnInit interface -> ngOnInit(){} 

Navigating between components: 

Pushing data around with subjects
    rxjs : library is more related with observable
    import { Subject } from 'rxjs';
    personsChanged = new Subject<string[]>(); //this Emitter similar to EventEmitter
    
    **************************************************************************************

    Ionic: Core Building blocks this work without anyframework <like Anugular not needed>
        UI components
        Themes & Styles 
        navigation 
        State management : Passing data around
        navigate device features
        Ionic CLI and Publishing 

    1. UI Component: 
        ion-button: shadowDom + CSS variables 
        ion-card:
        ion-card-header:
        ion-card-content:
        ion-item:
        ion-grid:

  ---------------------------------------------------------------------------------------------      
 create components: ng g c -> ng g c recipes  //same thing 
    ionic generate

ionic/angular wrapper class enables all angular ionic features.
we can simply use in html page. ionic just add animations to angular futures. 

Need of same data for multiple pages then StateManagement is key in Angular: 
Manageing State with services ->






