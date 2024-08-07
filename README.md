
![NatureNook_readme](https://github.com/EConradie/DV300_Term1_Project/assets/113447065/b718e3d7-f2c0-440f-bd0b-9151101b1819)

## NatureNook Overview

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![pgAdmin4](https://img.shields.io/badge/pgAdmin4-518EF8?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.pgadmin.org/)
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)](https://www.twilio.com/)


NatureNook was made to simplify and enhance the outdoor experience for camping and hiking enthusiasts. Recognizing that efficient gear management is crucial to the success and enjoyment of outdoor adventures, the project aimed to create a highly intuitive and user-friendly inventory management system. This system not only tracks and organizes gear but also provides tailored packages for users to include all family and friends.

## Features

- **User Authentication**: Secure user login and registration with OTP verification for enhanced security.
- **Inventory Management**: Manage and track gear across multiple warehouse locations with real-time updates.
- **Warehouse Dashboard**: Provides an overview of all warehouses, displaying detailed information about inventory levels.
- **Inventory Updates**: Users can update the quantities of resources. The system ensures that quantities cannot drop below zero.
- **Crafting System**: Users can craft new items using available inventory at specific warehouse locations based on predefined recipes.

## Tech Stack

- **Frontend**: Implemented using Angular for building a dynamic and responsive user interface.
- **Backend**: Express server manages routing and server-side logic, interfacing with the database.
- **Database**: PostgreSQL is used for storing and managing complex data relationships efficiently.
- **Authentication**: OTP authentication implemented with Twilio, providing secure access and enhancing the user experience.

## Demonstration Video

[https://drive.google.com/file/d/1HMyLIBtGYFiox-HhXtCEFA8Wc9nj3ML3/view?usp=drive_link](https://drive.google.com/file/d/1_v0C5zwtF2uHzu9K-jPH6zOl5jIfnbE7/view?usp=drive_link)

## Getting Started

To get started with NatureNook, follow these steps:

1. **Clone the repository:**
   
   Open your terminal and run `https://github.com/EConradie/DV300_Term1_Project.git` to clone the NatureNook repository to your local machine.
   ```
   https://github.com/EConradie/DV300_Term1_Project.git
   ```
   
3. **Navigate to the project directory:**

   After cloning, enter the directory by running `cd NatureNook`.
   ```
   cd client
   ```
   
5. **Install dependencies:**

   Run `npm install` to install all the required dependencies for the project.
   ```
   npm install
   ```
7. **Serve the application:**
  
   Execute `ng serve` to start the development server. Once the server is running, you can access the application by navigating to `http://localhost:4200/` in your web browser.
   ```
   ng serve --open
   ```
**Server setup**

In order to set up the database. The server's the Github repository can be found on the link below. The server's readMe file will contain instructions on how to set it up. 
```
https://github.com/EConradie/DV300_Term1_Project_Server.git
```

## Development Process

### Highlights
* The user interface's simplicity and the features that make using the website enjoyable are its highlights.
* The website is simple to use and comprehend.
* Integrate a Twilio function into your website to enable seamless communication via SMS, voice calls, or other channels.

### Challenges
* The login process was one of the challenges. Twilio granted us access to one person, however the new user is unable to log in. Erik will receive the OTP message if we use his phone number, which is +27815738849. This is not the best way to test or mark the       website.
* uploading the user's profile photo when they log in would be an additional functionality. Since it wasn't a short requirement, we decided it wasn't necessary and left it out.
* Due to scheduling constraints, the custom package was either incomplete or not finished at all. We continued with the quick tweaks and posted a coming soon notice on the custom package card. In the interim, the navigation option to create a custom package has    been disabled.
* It was a bit of a puzzle for desplaying the items in the crafting rection in packages page. and was unable to provide the goods. We modified a few entities and connections in the database for the solution, and it is now operational.

## Participation and Role in the Project

* The majority of the backend functionality was handled by Erik. He concentrated on setting up the server and the database. He put up the user function and the OTP. Additionally, he implemented the Database data in to the components.
* Emilio concentrated more on the project's front end and made sure the website had the intended appearance. He embedded the data into the cards with Erik's help, and he helped him with the crafting functionality. He filled in the actual data and the purpose of    the website on each warehouse's dashboard page.
* We collaborate on the project together over Discord for the majority of our working hours. This is a tiny sample of our calls on Discord:

## Future Implementations

In the future, clients with specific requests will be able to create their own packages on the website by utilising the management website's functionality. 

## License

[MIT](LICENSE) © Emilio Carreira, Erik Conradie
   

