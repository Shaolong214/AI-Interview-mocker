Visit the live application at [ai-interview-mocker-sage.vercel.app](https://ai-interview-mocker-sage.vercel.app).

# AIY Interview Coach

Welcome to **AIY Interview Coach**! This application, named after Evans, leverages cutting-edge technologies to provide users with AI-driven mock interviews, helping them prepare effectively for real-world interviews. Built with Next.js, React, Drizzle ORM, and powered by Google Gemini AI, this platform ensures a seamless and interactive user experience.

Table of Contents
-----------------

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Environment Variables](#environment-variables)
    -   [Database Setup](#database-setup)
    -   [Running the Application](#running-the-application)
-   [Core Functionalities](#core-functionalities)
-   [Deployment](#deployment)
  

Features
--------

-   **User Authentication**: Secure authentication using Clerk with support for social logins and email/password.
-   **Interactive AI Interviews**: Generate mock interview questions using Google Gemini AI.
-   **Real-time Recording**: Record user responses via web microphone and convert speech to text.
-   **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.
-   **Data Persistence**: Utilize PostgreSQL with Drizzle ORM for efficient data management.

Tech Stack
----------

-   **Frontend**: Next.js, React, Tailwind CSS
-   **Backend**: Node.js, Next.js API Routes
-   **Authentication**: [Clerk](https://clerk.com/)
-   **Database**: PostgreSQL, Drizzle ORM
-   **AI Integration**: Google Gemini API
-   **Deployment**: Vercel

Getting Started
---------------

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
-   **PostgreSQL**: Install PostgreSQL from [here](https://www.postgresql.org/download/).

### Installation

1.  **Clone the Repository**

    `git clone https://github.com/yourusername/ai-mock-interview-app.git
    cd ai-mock-interview-app`

2.  **Install Dependencies**

    `npm install`

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

`CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key`

`CLERK_SECRET_KEY=your_clerk_secret_key`

`GEMINI_API_KEY=your_gemini_api_key`

`DATABASE_URL=postgresql://user:password@localhost:5432/your_database_name`

### Database Setup

1.  **Initialize the Database**

    Ensure PostgreSQL is running. Then, create a new database:

    `createdb your_database_name`

2.  **Run Migrations**

    Use Drizzle ORM to run migrations (assuming you have set up migration scripts):

    `npm run migrate`

### Running the Application

Start the development server:

`npm run dev`

Open http://localhost:3000 to view the application in your browser.

Core Functionalities
--------------------

1.  **User Authentication with Clerk**

    -   Implement secure social and email/password authentication using Clerk.
    -   Seamlessly integrate Clerk into the Next.js application.
2.  **Frontend Styling with Tailwind CSS**

    -   Use Tailwind CSS to ensure a modern and responsive UI/UX across all devices.
3.  **Database Management with PostgreSQL and Drizzle ORM**

    -   Set up PostgreSQL for reliable data storage.
    -   Utilize Drizzle ORM for writing and executing database queries efficiently.
4.  **AI-Powered Interview Generation**

    -   Leverage the Google Gemini API to generate mock interview questions based on user input.
5.  **Recording and Speech-to-Text Conversion**

    -   Implement a feature to record user answers using the web microphone.
    -   Convert recorded speech to text for analysis and feedback.
6.  **AI Model Setup**

    -   Configure the Google Gemini API to create an AI model that dynamically generates interview questions and responses.

Deployment
----------

The application can be easily deployed on [Vercel](https://vercel.com/):



