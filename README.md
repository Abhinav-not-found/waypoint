# Waypoint

## One workspace. Every team. Every milestone.

### Description

**Waypoint is a team project management platform designed to help companies plan projects, organize work, and manage collaboration across their teams.**

It brings project planning, task and ticket management, team coordination, and real-time collaboration into one centralized workspace. From tracking everyday tasks and monitoring project progress to collaborating through discussions, meetings, and shared workspaces, Waypoint helps teams stay aligned and move towards their goals.

Built to support structured workflows and growing teams, Waypoint aims to simplify how organizations manage projects, coordinate people, and deliver work.

# Table of content

- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Application Urls](#application-urls)
- [Docs](#docs)
- [Automated deployment](#automated-deployment)
- [Contribution](#contributions)

# Tech stack

## Frontend

- Reactjs + Typescript
- Tailwindcss + Shadcn/ui
- TanStack Query + Zustand
- React Hook Form + Zod

## Backend

- Node.js + Express5
- Typescript + Zod
- OpenApi spec documentation + Scalar docs
- Redis + BullMQ
- Socket.io

## Database

- Mongodb

## Deployment

- Docker
- Github Actions
- Render
- VPS

<!-- [Application setup](./documentation/SETUP.md#application-setup) -->

# Project Structure

```
.
├── .github/
├── .vscode/
├── client/
├── documentation/
├── scripts/
├── server/
├──  .dockerignore
├──  .gitignore
├──  .prettierignore
├──  .prettierrc
├──   dockerfile
├──   eslint.config.js
└──   README.md
```

- **.github/** = Automated deployment workflow
- **.vscode/** = VS-Code related settings
- **client/** = Reactjs frontend application
- **server/** = Node Express backend application
- **documentation/** = All the developer documentations

# Application URLs

### Development

- Web application : http://localhost:3000
- Backend API : http://localhost:8000
- API documentation (scalar) : http://localhost:5000/api/docs

### Production

- Web application : https://waypoint-1dk5.onrender.com
- Backend API : https://waypoint-1dk5.onrender.com/api
- API documentation (scalar) :https://waypoint-1dk5.onrender.com/api/docs

# Docs

There are 2 types of docs in the project

1. Developer docs : All the manual development related docs are in `documentation` folder.<br>
   Visit [`(root)/documentation`](./documentation)
2. Api docs : All the api related docs (Scalar) are in `server` folder.<br>
   Visit [`backend_url/api/docs`](http://localhost:8000/api/docs)

## Developer Documentations

### 1) Getting started

- [Application setup] - local setup + docker setup
- [Environment variables - configure .env](./documentation/1.%20getting%20started/environment.md)
- [Dependencies - all the packages in this project](./documentation/1.%20getting%20started/dependency.md)

### 2) Architecture documentation

- [architecture] - Overall application architecture, small working flow chart example, website working example etc
- [app-route infrastructure](./documentation/2.%20architecture%20documentation/application-route-infra.md)
- [folder-structure] - explanation of folders and files
- [data-flow] - complete detailed explanation of data flowing from client -> server/api -> database
- [authentication] - auth explained (Login, registration, sessions, tokens and authorization).
- [database] - database explained (schema, model, relations etc with flow charts)
- [deployment] - explain the deployment process after pr merge to main, and ci-cd pipeline

### 3) Development guidelines

- [development-flow] - Frontend and backend development processes
- [coding-standards - Naming conventions, file organization and coding practices](./documentation/3.%20development%20guidelines/coding-standards.md)
- [git-workflow] - Branching, commits, pull requests and merging.
- [pr-template] - Pull request template.

### 4) Backend documentation

- [backend-overview] - Backend architecture and available modules.
- [file-overview] - what each file does and how to use it.
- [api-conventions] - Request/response structure, status codes and error handling.
- [api-authentication] — How protected endpoints work.

### 5) Contributions documentation

### 6) ADR documentation

- [Architecture decision records](./documentation/6.%20adr/000-adr.md)

# Automated deployment

- Push on main branch
- github actions will run
- creates a docker image
- puts the image into Github Container Registry (GHCR)
- render pulls that image and creates new deployment automatically

# Contributions

Contributions are welcome.

1. Fork the repository.
2. Clone and setup.
3. Create a feature branch.
4. Make your changes.
5. Run tests and lint checks.
6. Push to origin main.
7. Submit a pull request.

Please read our contribution guidelines before submitting a PR.
