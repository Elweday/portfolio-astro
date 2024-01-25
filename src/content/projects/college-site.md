---
dateTime: 2023-6-23T00:00:00Z
endDate: 2023-9-23T00:00:00Z
title: College Tracking System
description: College website with intuitive dashboard, control center, and detailed grade statistics for students and educators.
slug: college-tracking-system
draft: false
tags:
  - System Design
  - DBMS
  - Fullstack
  - UI
  - Education
  - Responsive Web Design
  - REST
  - API
projectURL: https://github.com/elweday/CollegeSite
stack:
  - svelte
  - postgres
  - tailwind
  - chartjs
  - prisma
  - nodejs
  - typescript
media:
  - "../images/helwan.jpg"
  - "../images/helwan2.jpg"
  - "../images/helwan.jpg"
  - "../images/helwan2.jpg"
---


## Contents

## Motivation
The motivation behind the College Tracking System project stemmed from the realization that the existing website of my local college was insufficient and lacked essential features. To address this, I set out to create a more functional platform that would cater to the needs of both students and educators. The primary objectives included:


### Student Features:

- Assignment Tracker: Allow students to view upcoming assignments, deadlines, and submission status.
Attendance Monitoring: Implement a feature for students to track their attendance in classes.
- Grade Analysis: Provide detailed analytics on their grades, including trends, improvement areas, and comparisons with peers. 
- Anonymous Feedback Forms: Implement a feature that allows students to provide anonymous feedback on courses, teaching methods, and overall learning experiences. This can help educators gather valuable insights for continuous improvement.
- Student Actions
    - Course Registeration: Intuitive Course Catalog, Smart Recommendations
    - Schedule Planning: Visual Schedule Builder, Conflict Resolution, Semester Overview.


### Staff Features:

- Course Management: Enable staff to manage and update course materials, syllabi, and related resources.
- Performance Analytics: Provide insights into class performance, average grades, and areas for improvement.
- Communication Tools: Implement tools for staff to easily communicate announcements, assignments, and updates to students.
- Customizable Alerts: Allow users to customize notification preferences based on their priorities.
- Event Reminders: Set automatic reminders for important events, deadlines, and academic milestones.
- Feedback Analytics:
Provide aggregated and anonymized analytics to educators, giving them a high-level overview of common feedback trends. This information can be used to make data-driven decisions for course adjustments.

### Accessibility and Inclusivity:
- Multi-language Support: Provide language options to cater to a diverse student population which is mostly Arabic or English .
- Accessible Design: Ensure the platform is accessible to users with disabilities, following web accessibility (a11y) standards.
- Integration with External Services:
    - Calendar Integration: Integrate with popular calendar applications to sync class schedules and events.
    - LMS Integration: Connect with Learning Management Systems for seamless data transfer and resource sharing.



## DB Design
![Schema Design](../images/schema.jpg)


Schema Overview and Design Choices
The database schema presented reflects the intricate structure of a college environment, encapsulating the relationships and interactions among students, courses, assessments, staff, and semesters. The design choices aim to align with the business logic inherent in the college structure. Let's delve into the key aspects of the schema and the rationale behind each decision:


#### Student Table
The "Enrollment" table establishes a relationship between students and course instances, reflecting the enrollment status of students in specific courses.
- Rationale:
By linking students to course instances through the "Enrollment" table, the schema captures the dynamic nature of student-course relationships, allowing for flexibility in enrollment tracking.

#### Grade Table
The "Grade" table uses the combination of "enrollment" and "assessment_id" to represent the total grade of a student in a course.
- Rationale:
Associating grades with both enrollments and assessments provides a comprehensive view of a student's performance in different assessments within a course, adhering to the business logic of grading systems.

#### CourseInstance Table
The "CourseInstance" table links courses with semesters, allowing for the definition of unique instances of courses within specific timeframes.
Rationale:
This design choice accommodates the need for organizing courses based on semesters, mirroring the academic structure of offering courses during specific periods.
    - Each semester there's a number of multiple course instances
    - Each instance is tied to it's staff timetable, etc

#### Assessment Table
The "Assessment" table includes information about assessments, such as their type, total marks, issuance details, and deadlines.
- Rationale: This table was tricky to think of
    - For each student in a particular course, the total mark is the sum aggregation of all the grades added to all the assesments.
    - Final, midterm is indeed a type of assesment, it is graded, have an issuer, have a date and time, can be postboned ..etc 
#### CourseStaff Table
The "CourseStaff" table establishes the relationship between courses, staff members, and their roles in a particular course instance.
- Rationale:
  - This table manages a many-to-many relationship between `Course` and `Staff` tables.
  - The "course proffesor" have higher authority, and it can be implemented as such.
  - Each course can have multiple of each staff type
  - every one of the staff can issue assesments

#### Semester Table
The "Semester" table captures details about academic semesters, including the year, type, and start and end dates.
Rationale:
This choice aligns with the college's academic structure, allowing for the organization of courses and assessments within distinct semesters.


####  Enums for Department, Role, Assessment Type, and Semester Type:
The use of enums for department names, staff roles, assessment types, and semester types provides a predefined set of values, ensuring consistency and preventing invalid entries.
- Rationale:
Enumerating department names, staff roles, assessment types, and semester types aligns with the standardized classifications within the college, reducing the risk of data inconsistencies.
> I've considered making them a dedicated table but it was an overkill, since the departments and roles didn't change for the past 30 years.

In summary, the schema design is tailored to mirror the complexity of a college's organizational structure and academic processes. The choices made emphasize clarity, consistency, and the ability to represent dynamic relationships inherent in a college environment.


## Backend
### Architecture
The backend architecture employs a modern and scalable approach, leveraging `PostgreSQL` as the relational database management system. `Prisma` acts as the ORM, facilitating seamless communication between the Node.js server and the database. The server-side logic is implemented using TypeScript to enhance type safety and code clarity.

### API
The backend exposes a RESTful API implemented with `Sveltekit`, providing endpoints for various operations such as student information retrieval, course enrollment, grade management, and more.
API routes are organized to adhere to `REST` principles, enhancing maintainability and readability.

### Authentication and Authorization (Not implmeneted yet)
- Utilize the college's educational mail system as the OAuth provider.
- Integrate with the OAuth provider's API to enable authentication using the existing student and educator email accounts.

## Frontend
![Front end image](../images/helwan2.jpg)

### Svelte/SvelteKit
Leverage SvelteKit's reactivity to create dynamic and responsive components that update automatically when the underlying data changes.
- Simplicity is the key
Svelte's syntax is concise and intuitive, resulting in cleaner and more readable code compared to other frameworks.
    - Svelte simplifies state management with its built-in reactive system, reducing the need for external state management libraries.
    - Svelte's syntax closely resembles standard HTML, CSS, and JavaScript, making it approachable for developers with varying levels of experience.
```svelte
<script>
  let name = 'Nefe';
</script>

<h1>Hello, {name}!</h1>

<style>
  h1 {
    color: green;
  }
</style>
```

```svelte
<script>
  let a = 1;
  let b = 2;
</script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>
<p>{a} + {b} = {a + b}</p>
```
these code snippets are totally readable even by non-developers
they are trivial but doing the same examples using react or other crypric frontend framework wouldn't be that trivial.


- Efficiency
  - Svelte's absence of a virtual DOM (yes, looking at you react) leads to smaller bundle sizes and improved runtime performance, making it an efficient choice for frontend development.
  - The compiler-driven approach of Svelte optimizes the build process, resulting in smaller and faster bundles for improved performance.
  - The compiler-driven approach of Svelte optimizes the build process and eliminates unnecessary runtime overhead, resulting in faster load times.

> By the time of writing this `svelte 5` is still in beta but it got crazy fast, I will be migrating when it's done.

-  Use SvelteKit's built-in form handling capabilities for efficient form development.
Implement form validation to ensure data integrity and provide users with meaningful feedback.


### Tailwind CSS:
- Utility-First Approach
Tailwind CSS's utility-first approach provides a low-level utility class for styling, allowing for quick and flexible styling without writing custom CSS.
- By adhering to a predefined set of utility classes, Tailwind ensures a consistent and cohesive design language throughout the application.
- Locality of Behavior
This is big for me, one of the reasons css was painful to write and monitor was that I write the markup somewhere then style it somewhere else, 
so I pretty much rather code tailwindcss 
```html
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Default</button>
```

Rather than
```html
<button type="button" class="button-primary">Default</button>
```
and in another file I write

```css
.button-primary {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem; 
  padding-left: 1.25rem;
  padding-right: 1.25rem; 
  margin-bottom: 0.5rem; 
  border-radius: 0.5rem; 
  font-size: 0.875rem;
  line-height: 1.25rem; 
  font-weight: 500; 
  color: #ffffff; 
  background-color: #1D4ED8; 
  font-size: 40pt;
}
.button-primary:hover {
  background-color: #1E40AF; 
}

@media screen and (min-width: 600px) {
  .button-primary {
    font-size: 60pt;
  }
}

```
I not all the tailwind code is converted because I was bored, but you get the idea.
let alone that the difficulty of naming is eliminated.


### [Skeleton UI](https://skeleton.dev)
An amazing UI framework built on top of svelte and talwind
proividing components, actions, theming, interactivity, customizability, and it integrates really well with all the existing stuff.
Consider checking it out. 

### Chart.js:
- Versatility:
Chart.js offers a wide range of chart types, making it versatile for displaying various types of data, including student grades, trends, and statistics.
- Ease of Use:
The library is known for its simplicity and ease of use, allowing developers to create visually appealing charts with minimal configuration.
- Interactivity:
Chart.js supports interactive features, such as tooltips and animations, enhancing the user experience when exploring and interpreting data.
I mean Look at these pretty charts, made with ease.
![Charts](../images/charts.jpg)


In summary, the combination of SvelteKit, Tailwind CSS, and Chart.js creates a frontend stack that is not only efficient and performant but also promotes a developer-friendly and visually appealing user interface for the College Tracking System. The simplicity of Svelte's syntax, the locality of behavior encouraged by Tailwind CSS, and the versatility of Chart.js contribute to an optimal frontend development experience.

## Deployment

Why Vercel?
In deploying the College Tracking System, the choice of Vercel as the hosting platform stems from several compelling reasons, aligning with the project's requirements and development philosophy.
### I'm poor, lol
Vercel offers a free tier with generous resources, making it cost-effective for small to medium-sized projects. The platform's transparent and flexible pricing ensures scalability as the project grows.
### Serverless Architecture
Vercel's serverless architecture allows for efficient allocation of resources based on demand. This ensures optimal performance and scalability, accommodating varying levels of traffic without unnecessary overhead.
### Speed and Performance:
Global Content Delivery Network (CDN):
Vercel provides a global CDN that ensures content is delivered quickly to users worldwide. This minimizes latency and significantly improves the system's overall speed and responsiveness.
### Ease of Deployment:
Seamless Integration with Git:
Vercel's seamless integration with Git repositories simplifies the deployment process. Automatic deployments can be triggered with each push to the repository, streamlining the development workflow.
### Easy Monitoring and Analytics:
Built-In Monitoring Tools:
Vercel provides built-in monitoring tools that offer insights into the application's performance, error rates, and user interactions. This simplifies the monitoring and debugging processes, allowing for proactive issue resolution.
### Custom Domains and SSL Certificates:
Vercel makes it easy to configure custom domains for the College Tracking System, providing a professional and branded web address.
> Mine was https://helwan.vercel.app. go check it out I think it's pretty unique, that I hijacked the domain for the whole city of helwan.
### Prerendering and Static Site Generation (SSG)
Vercel supports sveltekit's prerendering and static site generation, resulting in prebuilt pages that can be served instantly to users. This enhances the user experience by minimizing loading times.

## How did it go
The College Tracking System, while not fully realized due to the university's decision to opt for a software company, stands as a testament to the valuable learning experiences gained throughout its development. The journey of creating this system, has provided insights into various aspects of software engineering, ranging from database design and backend development to frontend implementation and deployment.

Though the project may not currently be in active use, its existence serves as a tangible manifestation of dedication, problem-solving skills, and a commitment to continuous improvement. The decision to embark on such a venture, despite external outcomes, reflects a passion for technology and a desire to contribute to educational systems.

As the project remains accessible, it offers an opportunity for others to explore, learn, and potentially build upon its foundation. The experience gained during this undertaking, will undoubtedly contribute to future endeavors and shape the evolution of skills and perspectives in the dynamic field of software development. In essence, the College Tracking System, even in its incomplete state, represents a valuable chapter in the ongoing journey of growth and learning in the realm of software engineering.








