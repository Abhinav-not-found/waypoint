/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponse } from '../models/AuthResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Register a new user
     * Creates a new user account and returns user information with authentication tokens.
     * @param requestBody
     * @returns AuthResponse User registered successfully
     * @throws ApiError
     */
    public static postAuthRegister(
        requestBody: RegisterRequest,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation error`,
                409: `User already exists`,
            },
        });
    }
    /**
     * Login user
     * Authenticates a user and returns access and refresh tokens.
     * @param requestBody
     * @returns AuthResponse Login successful
     * @throws ApiError
     */
    public static postAuthLogin(
        requestBody: LoginRequest,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation error`,
                401: `Invalid credentials`,
            },
        });
    }
    /**
     * Logout user
     * Invalidates the current user's refresh token.
     * @returns any Logout successful
     * @throws ApiError
     */
    public static postAuthLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Refresh access token
     * Generates a new access token using a valid refresh token.
     * @returns RefreshTokenResponse Token refreshed successfully
     * @throws ApiError
     */
    public static postAuthRefresh(): CancelablePromise<RefreshTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh',
            errors: {
                401: `Invalid or expired refresh token`,
            },
        });
    }
    /**
     * Get current user
     * Returns the authenticated user's profile information.
     * @returns UserResponse User profile retrieved successfully
     * @throws ApiError
     */
    public static getAuthMe(): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
