# 22-6-2025

1. Grades, Task B - 80%
2. Project 2 - 90%

3. Pull request, How to submit project?

-

4. Recap - last lesson react, useState, routing.
5. routing + examples + new features.

## Cars Project

1. add new route, Register Route.
2. Crete form, userName, password, firstName and LastName
3. make input validation for userName and password - mandatory
4. submitting the form will navigate to login
5. navigate to register should be from the login page

6. convert the Registration form to use `useRef`
7. clone the reposiroty, run `npm install` inside nodejs.api and run `npm start`

8. implement login with the new api
   /login POST {userName:"bla", password:"blabla"}
   if the login succeeded navigate to home page.

# 25-6-2025

1. use /cars GET request to recieve cars to the Cars routing page on page loading
2. implement sales filters

```html
<button>This Month Sales</button> <button>All Sales</button>
```

# 29-6-2025

## Ex-1

1. In Cars Page
2. Show in piechart the types and number of cars for each type - https://recharts.org/en-US
   Electric - 2, Sedan - 1 , Crossover - 1
3. use useMemo to memoize this calculation

## Ex-2

1. Apply useCallback in registration page - `registerAction`


## Ex-3

1. Support New Route - Add new car.
2. Support the form inputs, name, type, price, image
3. support button - add new car
4. when clicking the button - make post request to the following API: POST /cars { name, type, price, image }
4. move to cars page to make sure the additional car added successfully 