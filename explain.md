# Star Wars Explorer ![N|Death Star](https://icons.iconarchive.com/icons/sensibleworld/starwars/24/Death-Star-icon.png)

Star Wars Explorer is an Angular web-app.

### Project Structure:
- `app`
  - `movies` -> movies module [lazy loaded in app.module.ts]
    - `services` -> contains services used only by movies module
  - `people` -> people module [lazy loaded in app.module.ts]
    - `services` -> contains services used only by people module
  - `planets` -> planets module [lazy loaded in app.module.ts]
    - `services` -> contains services used only by planets module
  - `shared`
    - `components` -> components used by other (smart) components (except for landing used only by app.component)
      - `custom-paginator` -> used for navigation thru a list
      - `error` -> used to display errors
      - `detail-view` -> used for displaying any single detailed element (a movie, a person, a planet)
      - `landing` -> homepage, allows navigation to different routes
      - `list-of-elements` -> generic list displaying component
      - `spinner-no-record` -> used for displaying error message and loading
    - `directives` -> contains a custom pipe and a custom directive
    - `interfaces` -> contains an interface implemented by PeopleService, PlanetsService, MoviesService
    - `models` -> contains model used to highlight the structure of objects used inside the web-app
    - `services`
      - `interceptor` -> interceptor used to make all api calls to https in case environment requests so
      - `swapi` -> interceptor used to make all api calls to https in case environment requests so


### Requirements satisfied:
- Services and Dependency Injection -> every module has its own service to handle data flow, these services are injected in their relative module, only one main service is provided inside shared module, this allows communication between angular application and swapi.dev server.
- A common module for components/services used by multiple routes -> can be found @app/shared/shared.module
- RxJS & Async Pipes to load data and chain together multiple calls to the api -> RxJS methods used inside services (of, subscribe, Observable...), Async pipes used to pass observables into html templates.
- NgModules & Lazy Loading -> components such as people, movies, planets are modules loaded lazily (follow @app/app.routing.module.ts)
- Presentational and Smart Components -> Components such as PeopleComponent, MoviesComponent, PlanetsComponents are smart components as they are tightly coupled to this applicaation's services. While comoponents such CustomPaginatorComponent, ListOfElementsComponent, SpinnerNoRecordComponent and DetailViewComponent are presentational components as these do not interact with any service, they only contain html tempalte and Input Output directives.
- SCSS -> Every component uses scss files.


> Mismatch: for the view displaying a person's details, in the challange document Eye color is present in the last image (Luke Skywalker) while it is not listed under Person field.

✅ It has been added in both places.

==Flow has not been changed, some styling has been applied to beautify (according to me) the application.==

### Extras:
- styles to beautify
- Karma tests for presentational components (run `npm test`)
- application dockerized
- created a subdomain on AWS and deployed application @ swapi.akwares.io
