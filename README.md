<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]](https://github.com/DevByDJ/Database-Engineering-Project/blob/master/LICENSE.txt)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/danny-joseph-52206389/)



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://fgcu.edu">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Software Engineering Repository Web Application</h3>

  <p align="center">
    <br />
    <a href="https://github.com/DevByDJ/Database-Engineering-Project/edit/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/DevByDJ/Database-Engineering-Project/issues">Report Bug</a>
    ·
    <a href="https://github.com/DevByDJ/Database-Engineering-Project/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#uploading-datasets-to-the-postgres-database">Uploading Datasets(.csv files)</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


![Login Page](https://user-images.githubusercontent.com/89165878/234165331-60b26159-273a-499a-a567-f0adc0322c02.png)


The Software Engineering Club Internship Finder is a web application designed to provide registered members of the Software Engineering club with access to a comprehensive and up-to-date repository of internship opportunities, as well as a system for managing and viewing club events. Users will be able to create a personalized profile to save individual opportunities and receive alerts about updates through the event system. The web application uses Node.js, Express.js, Postgres and JWT for authentication, and is designed to be user-friendly and accessible. The goal of the project is to help members of the club find internship opportunities more easily and stay engaged with the club community.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
* ![Gitea](https://img.shields.io/badge/Gitea-34495E?style=for-the-badge&logo=gitea&logoColor=5D9425)
* ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
This project requires and assumes you are working with a version of node.js. If you need assistance installing this package please following the instructions listed below:

**Windows**

1. Install [Chocolatey](https://chocolatey.org/install), a package manager for Windows.

powershell
```
choco install nodejs
```

**macOS**

1. Install Homebrew, a package manager for macOS.

```
brew install node
```

**Linux**
Debian, Ubuntu, and other Debian-based distributions

1. Open a Terminal window.
2. Update the package list, install the necessary build tools, and install Node.js:

```
sudo apt-get update
sudo apt-get install -y build-essential
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Use these instructions to clone the repository to a particular workstation.

1. Clone the repo
   ```sh
   git clone https://github.com/DevByDJ/Database-Engineering-Project.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>
   
## Uploading Datasets(.csv files) to the PostGres Database

After you've installed PostGres and pgAdmin, open SQL Shell(psql) and do the following:
```
CREATE DATABASE <name> ;
```

You can check to see if the Database has been created by entering:
```
\l
```

Next, connect to the database you just created:
```
\c <name of new database>
```

Once connected you can begin creating a new Table:
```
CREATE TABLE <name> (
```

Then proceed to add the attributes of the table based off a schema.
Once the table is successfully created run the following command to transfer data from a .csv file to the new Table:

```
\copy <name of table> (column 1, column 2, column 3) FROM '<Path to the .csv file' WITH (FORMAT csv, HEADER true, DELIMITER ',', QUOTE '"', ESCAPE '"');
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Running the Application

When you have successfully installed the project and it's dependencies run the following command to start the web application

```sh
   npm start
```

It should then prompt you on the port that the application is being run i.e
```sh
   localhost:3000/login
```

Feel free to copy and paste it on your browser of choice to view the web application. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Connecting the Web Application

The project protects your database credentials from being viewed on the public repository by storing the credentials to access the local postgres database in a separate (ignored by git) file. Which means you will need to create your own file that holds the credentials by doing the following:

1. Create an `.env` file in the root directory of the project.

2. In the `.env` file add the following text

```sh
  DB_HOST='localhost'
  DB_USER='postgres'
  DB_PASSWORD='<Replace with your password>'
  DB_NAME='<Replace with the name of your database>'
  DB_PORT=5432
```
3. Save file and Run the application!

Side Note: Your `.env` should never be pushed to the github repository. This is for security purposes!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Create a Login Page
- [x] Create a Register Page
- [x] Create a Authentication Page
- [ ] Create a Dashboard
- [x] Link a PostGres Database
- [ ] Create Unit Tests
- [ ] Create a CI/CD pipeline for future development

See the [open issues](https://github.com/DevByDJ/Database-Engineering-Project/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/DevByDJ/Database-Engineering-Project/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/DevByDJ/Database-Engineering-Project/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
