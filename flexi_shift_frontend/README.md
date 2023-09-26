# FLEXI SHIFT 
**Project By:** Susie Gordon

## Description
Flexi Shift is a full CRUD app that conveniently helps employers and employees schedule individual work shifts. Users can view their manually added list of shifts and the calendar month of choice displaying all other reserved shifts submitted by supervisors, colleagues, or coworkers. 

## Links
- [**Github**](https://github.com/choisus08/project_4_frontend)
- [**Deployment**](https://project-4-frontend-tau.vercel.app/)
- [**Trello**](https://trello.com/b/SYwaLdsk/flexi-shift)
</br>

## Technologies Used
- Django
- Google Fonts
- Lottie Files
- Postman
- Python
</br>

## Approach
My initial approach was to make a call to the backend by successfully implementing a 'shift' model with full CRUD capabilities. In order to fully render the CRUD functionalities, the backend url was imported to make the proper requests to load relevant data and initiate corresponding actions which then were passed into the routers.js file. This file would be the roadmap to guide how each page of the app would be painted using the 'pages' and 'components' folders. 
</br>

## Installation
- `Fork` and `clone` this respository
- `cd` into the directory on your local machine
- Open this repository in your code editor and run the code `npm start` to open the React app in your browser
</br>

## Mockup of UI <br>
Desktop View <img src= "./public/ui_desktop.png" alt="Desktop UI">
<img src= "./public/ui_desktop2.png" alt="Desktop UI"> 
</br>
</br>
Mobile View <br>
<img src= "./public/ui_mobile.png" alt="Mobile UI">
</br>

## Issues 
1. Unable to implement authentication
    - Was able to render register & login forms but the backend was unable to receive the requests rendering the auth feature incomplete; Commented out my attempt.
</br>


## Future Enhancements
- Implement an interactive calendar
- Color coding for each employee
- Add a list of preset icons for each user to choose from
</br>

## Resources 
- https://docs.djangoproject.com/en/4.2/