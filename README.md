# AgenceVoyage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Addition helps for developpers

## Creation des services ANGULAR

Pour créer des service adequats et connecter a vos API, il faut au minimum savoir qu'elle est la route de l'API:

```typescript
export class ApplicationService {
  private BaseUrl = "http://localhost:8081/tg/voyage_pro/reservation/auth/";
}
```

ce qui n'est pas juste

```typescript
export class VoyageServiceService {
  private baseUrl = "http://localhost:8081/api-voyages"; /** ceci est le lien de l'api de voyage crée dans le projet Spring boot; 
  * http://localhost:8081 étant l'adresse du serveur et api-voyages correspondant au @RequestMapping dans le controller @RequestMapping("/api-voyages");
  
  */

  constructor(private http: HttpClient) {}
  /**
   * Contacte l'api pour récupérer la liste des voyages
   */
  getAllVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.baseUrl + "/all", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Fonction de creation d'un voyage
   * @param voyage le voyage à enregistrer
   * @returns Retourne un objet validant si l'enregistrement est fait ou pas
   */

  createVoyages(voyage: Voyage) {
    return this.http.post(this.baseUrl + "/create-voyage", voyage, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
```

donc en vous basant sur l'exemple proposer ci-dessus vous devriez capable de corriger sur les autres components de votre projet

## Amélioration envisageable

- Créer des sous component pour les cartes pour les appelés avec des inputs pour eviter d'avoir des long code html compliqué à débuger en cas de problème
- Typé le retour des api pour avoir des élément plus facile à utilser dans le code plutôt que tout mettre à `any`

```typescript
function getAllVoyages(): Observable<Voyage[]> {}
```
