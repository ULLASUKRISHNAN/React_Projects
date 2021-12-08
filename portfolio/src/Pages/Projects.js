import React from 'react';
const Projects = () => {
  return (
    <div>
      <header ClassName='projects-hero'>
        <div ClassName='section-title'>
          <h1>my projects</h1>
          <div ClassName='underline'></div>
        </div>
      </header>
      <section ClassName='section'>
        <div ClassName='section-center projects-page-center'>
          <article ClassName='single-project'>
            <div ClassName='project-container'>
              <img src='./images/project-1.jpeg' alt='single project' />
              <a href='https://www.johnsmilga.com' ClassName='project-icon'>
                <i ClassName='fas fa-home'></i>
              </a>
            </div>
            <div ClassName='project-details'>
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                eveniet amet odit aperiam, provident cum possimus sapiente minus
                quos! Ipsum?
              </p>
              <div ClassName='project-footer'>
                <span>
                  <i ClassName='fab fa-github'></i>
                </span>
                <a href='https://www.github.com'>source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* <script src="./js/app.js"></script> */}
    </div>
  );
};

export default Projects;

//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>John Doe || Projects</title>
//     <link
//       rel="stylesheet"
//       href="./fontawesome-free-5.12.1-web/css/all.min.css"
//     />
//     <!-- css -->
//     <link rel="stylesheet" href="./css/styles.css" />
//   </head>

// </html>
