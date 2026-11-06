# Dependencies

Here is the list of all the <u>**important**</u> dependencies in this project

### Frontend

- **Validation and forms:**
  - Zod — schema validation.
  - React Hook Form — form state management.
  - @hookform/resolvers — connects schemas to React Hook Form.
- **Data fetching and state management:**
  - Axios — HTTP requests.
  - @tanstack/react-query — fetching and caching server data.
  - Zustand — lightweight state management.
- **User interface and styling:**
  - Shadcn — reusable UI components.
  - Sonner — toast notifications.
  - Tailwind CSS — utility-first styling.
- **Navigation:**
  - React Router — client-side routing.
- **Development tooling:**
  - TypeScript — static type checking.

### Backend

- **Validation:** Zod — validates and parses data against schemas.
- **Web server:** Express — handles HTTP requests and routes.
- **Database:** Mongoose — models data and connects to MongoDB.
- **Authentication and security:**
  - bcrypt — hashes passwords.
  - jsonwebtoken — creates and verifies JSON Web Tokens.
  - Helmet — sets security-related HTTP headers.
  - HPP — helps prevent HTTP parameter pollution.
- **Request middleware and uploads:**
  - compression — compresses HTTP responses.
  - cookie-parser — parses cookies from incoming requests.
  - cors — configures cross-origin requests.
  - dotenv — loads environment variables from a file.
  - multer — handles multipart file uploads.
- **Media:** ImageKit — stores and delivers media assets.
- **Logging:**
  - Morgan — logs HTTP requests.
  - Pino — provides structured application logging.
  - pino-pretty — formats Pino logs for readability.
- **Real-time communication:** Socket.IO — enables bidirectional event-based communication.
- **API documentation and client generation:**
  - swagger-jsdoc — generates OpenAPI documentation from JSDoc comments.
  - swagger-ui-express — serves interactive Swagger UI documentation.
  - openapi-typescript-codegen — generates a TypeScript client from an OpenAPI specification.
- **Development tooling:** TypeScript — adds static typing to JavaScript.
