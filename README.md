# waypoint

## One workspace. Every team. Every milestone.

### Description

**Waypoint is a team project management platform designed to help companies plan projects, organize work, and manage collaboration across their teams.**

It brings project planning, task and ticket management, team coordination, and real-time collaboration into one centralized workspace. From tracking everyday tasks and monitoring project progress to collaborating through discussions, meetings, and shared workspaces, Waypoint helps teams stay aligned and move towards their goals.

Built to support structured workflows and growing teams, Waypoint aims to simplify how organizations manage projects, coordinate people, and deliver work.

# Table of content

- [Tech stack](#tech-stack)
- [Project structure](#project-structure)

# Tech stack

## Frontend

- Reactjs + Typescript
- Tailwindcss + Shadcn/ui
- TanStack Query + Zustand
- React Hook Form + Zod

## Backend

- Node.js + Express5
- Typescript + Zod
- OpenApi spec documentation
- Redis + BullMQ
- Socket.io

## Database

- Mongodb

## Infrastructure

- Docker
- Github Actions

<!-- [Application setup](./documentation/SETUP.md#application-setup) -->

### Getting started

[Application setup] - local setup + docker setup
[Environment variables]
[Dependencies] - all the packages in frontend and backend

### Architecture documentation

[architecture] - Overall application architecture, small working flow chart example, website working example etc
[folder-structure] - explanation of folders and files
[data-flow] - complete detailed explanation of data flowing from client -> server/api -> database
[authentication] - auth explained (Login, registration, sessions, tokens and authorization).
[database] - database explained (schema, model, relations etc with flow charts)
[deployment] - explain the deployement process after pr merge to main, and ci-cd pipeline

## Development guidelines

[development-flow] - Frontend and backend development processes
[coding-standards] - Naming conventions, file organization and coding practices.
[git-workflow] - Branching, commits, pull requests and merging.
[pr-template] - Pull request template.

## backend documentation

[backend-overview] - Backend architecture and available modules.
[file-overview] - what each file does and how to use it.
[api-conventions] - Request/response structure, status codes and error handling.
[api-authentication] — How protected endpoints work.

# Project Structure

```
.
├── .vscode/
├── client/
├── documentation/
├── server/
├──  .gitignore
├──  .prettierignore
├──  .prettierrc
├──   eslint.config.js
└──   README.md
```

- **.vscode/** = VS-Code related settings
- **client/** = Reactjs frontend application
- **server/** = Node Express backend application
- **documentation/** = All the developer documentations

# Application URLs

- Web application : http://localhost:3000
- Backend API : http://localhost:8000
- Product documentation (fumadocs) : http://localhost:3000/docs
- API documentation (scalar) : http://localhost:5000/api/docs

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

# Docs

There are 3 types of docs in the project

1. Developer docs : All the manual development related docs are in `documentation` folder.<br>
   Visit [`(root)/documentation`](./documentation)
2. Product docs : All the product/website related docs (Fumadocs) are in `client` folder.<br>
   Visit [`frontend_url/docs`](http://localhost:3000/docs)
3. Api docs : All the api related docs (Scalar) are in `server` folder.<br>
   Visit [`backend_url/api/docs`](http://localhost:8000/api/docs)
