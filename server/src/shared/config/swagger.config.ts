import swaggerJsdoc from 'swagger-jsdoc';
import env from '@/shared/config/env.config.js';
import path from 'node:path';

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.1.0',

    info: {
      title: 'Waypoint API',
      version: '1.0.0',
      description: 'API documentation for Waypoint',
    },

    servers: [
      {
        url: process.env.API_BASE_URL || 'http://localhost:3000/api',
        description: env.IS_PROD ? 'Production server' : 'Development server',
      },
    ],

    tags: [
      {
        name: 'Authentication',
        description: 'Authentication related APIs',
      },
      {
        name: 'Organisations',
        description: 'Organisation creation, retrieval, management and deletion APIs',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },

      schemas: {
        User: {
          type: 'object',
          required: ['id', 'name', 'email'],
          properties: {
            id: {
              type: 'string',
              example: '6a8f0bbc7b147839f36243f4',
            },
            name: {
              type: 'string',
              example: 'Abhinav',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'abhinav@gmail.com',
            },
            avatar: {
              type: 'string',
              nullable: true,
              example: null,
            },
          },
        },

        RegisterRequest: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name: {
              type: 'string',
              example: 'Abhinav',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'abhinav@gmail.com',
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'Password@123',
            },
          },
        },

        LoginRequest: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              example: 'abhinav@gmail.com',
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'Password@123',
            },
          },
        },

        UserResponse: {
          type: 'object',
          required: ['statusCode', 'message', 'data', 'success'],
          properties: {
            statusCode: {
              type: 'integer',
              example: 200,
            },
            message: {
              type: 'string',
              example: 'Fetched user info',
            },
            data: {
              $ref: '#/components/schemas/User',
            },
            success: {
              type: 'boolean',
              example: true,
            },
          },
        },

        AuthResponse: {
          type: 'object',
          required: ['statusCode', 'message', 'data', 'success'],
          properties: {
            statusCode: {
              type: 'integer',
              example: 200,
            },
            message: {
              type: 'string',
              example: 'Login successful',
            },
            data: {
              type: 'object',
              required: ['user'],
              properties: {
                user: {
                  $ref: '#/components/schemas/User',
                },
                accessToken: {
                  type: 'string',
                  example: 'eyJhbGciOiJIUzI1NiIs...',
                },
                refreshToken: {
                  type: 'string',
                  example: 'eyJhbGciOiJIUzI1NiIs...',
                },
              },
            },
            success: {
              type: 'boolean',
              example: true,
            },
          },
        },

        RefreshTokenResponse: {
          type: 'object',
          required: ['statusCode', 'message', 'data', 'success'],
          properties: {
            statusCode: {
              type: 'integer',
              example: 200,
            },
            message: {
              type: 'string',
              example: 'Token refreshed successfully',
            },
            data: {
              type: 'object',
              required: ['accessToken'],
              properties: {
                accessToken: {
                  type: 'string',
                  example: 'eyJhbGciOiJIUzI1NiIs...',
                },
              },
            },
            success: {
              type: 'boolean',
              example: true,
            },
          },
        },

        ApiError: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              example: 'User already exists',
            },
            errors: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },

        Organisation: {
          type: 'object',
          required: ['_id', 'name', 'slug', 'description', 'createdBy'],
          properties: {
            _id: {
              type: 'string',
              example: '6a8f0bbc7b147839f36243f4',
            },
            name: {
              type: 'string',
              example: 'Acme Technologies',
            },
            slug: {
              type: 'string',
              example: 'acme-technologies',
            },
            description: {
              type: 'string',
              example: 'A software development company',
            },
            logo: {
              type: 'string',
              nullable: true,
              example: null,
            },
            createdBy: {
              type: 'string',
              example: '6a8f0bbc7b147839f36243f4',
            },
            isDeleted: {
              type: 'boolean',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },

        CreateOrganisationRequest: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              minLength: 2,
              maxLength: 100,
              example: 'Acme Technologies',
            },
            description: {
              type: 'string',
              maxLength: 500,
              example: 'A software development company',
            },
            logo: {
              type: 'string',
              format: 'uri',
              example: 'https://example.com/logo.png',
            },
          },
        },

        UpdateOrganisationRequest: {
          type: 'object',
          minProperties: 1,
          properties: {
            name: {
              type: 'string',
              minLength: 2,
              maxLength: 100,
              example: 'Acme Technologies',
            },
            description: {
              type: 'string',
              maxLength: 500,
              example: 'An updated organisation description',
            },
            logo: {
              type: 'string',
              format: 'uri',
              example: 'https://example.com/new-logo.png',
            },
          },
        },

        OrganisationResponse: {
          type: 'object',
          required: ['statusCode', 'message', 'data', 'success'],
          properties: {
            statusCode: {
              type: 'integer',
              example: 201,
            },
            message: {
              type: 'string',
              example: 'New organisation created',
            },
            data: {
              $ref: '#/components/schemas/Organisation',
            },
            success: {
              type: 'boolean',
              example: true,
            },
          },
        },

        OrganisationsResponse: {
          type: 'object',
          required: ['statusCode', 'message', 'data', 'success'],
          properties: {
            statusCode: {
              type: 'integer',
              example: 200,
            },
            message: {
              type: 'string',
              example: 'Fetched all organisations',
            },
            data: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Organisation',
              },
            },
            success: {
              type: 'boolean',
              example: true,
            },
          },
        },
      },
    },
  },

  apis: [
    path.join(process.cwd(), 'src/module/**/*.ts'),
    path.join(process.cwd(), 'dist/module/**/*.js'),
  ],
});

export default swaggerSpec;
