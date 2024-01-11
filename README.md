# SearchForGithubUsers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Description

the project intented to search for github users through their usernames 

## How to run?
just run the following command Run `npm install` or `npm i`
## How to use?
1. inside the search box write any github username
2. the app will wait 300 milliseconds then will automatically fetch the data
  a. if you want you can click the search button but you need to know only one request will be triggered unless you change the entered username
3. a loading spinner will be shown once the application is searching
4. when a data is found the loader will disapper and the results will be shown
5. if no data found then the loader will disapper and you will see a message indicating that there's no data

## How did I started thinking?

1. analysed components to be used
2. then services
3. then checked github documentation to know the endpoints
4. started genrating components
5. thought of the good folder structure to be used
6. the project didn't need any routing or any lazy loading
7. finished the project but using services and observables without any NGRX
8. added NGRX for handling the state (consuming endpoints, loading state, in addition to error states)
9. remove any unused code or files

##  WHYs?
1. why did you create the project with angular 14?
   - to show that i can upgrade the angular version (I know it's not that big deal)
2. why you didn't start with the good folder structure?
   - the project looked small so i didn't want to make an extendable work but then i realized why not to do the correct thing and i can extend the project
3. why didn't you add the github access key or token?
   - for security and i don't have a backend in addition to showing how i handled the error when it happens
4. why did you use ngx-toastr while there's bootstrap?
   - to show that i'm comfortable with third libraries
5. why didn't use angular material?
   - as i mentioned earlier the project is small so no need for complexity and let's do things fast
