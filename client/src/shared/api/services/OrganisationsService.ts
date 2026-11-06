/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrganisationRequest } from '../models/CreateOrganisationRequest';
import type { OrganisationResponse } from '../models/OrganisationResponse';
import type { OrganisationsResponse } from '../models/OrganisationsResponse';
import type { UpdateOrganisationRequest } from '../models/UpdateOrganisationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganisationsService {
    /**
     * Create an organisation
     * Creates a new organisation for the authenticated user.
     * @param requestBody
     * @returns OrganisationResponse Organisation created successfully
     * @throws ApiError
     */
    public static postOrganisations(
        requestBody: CreateOrganisationRequest,
    ): CancelablePromise<OrganisationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/organisations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation error`,
                401: `Authentication required`,
                409: `Organisation conflict`,
            },
        });
    }
    /**
     * Fetch all organisations
     * Retrieves all non-deleted organisations. Requires authentication.
     * @returns OrganisationsResponse Organisations fetched successfully
     * @throws ApiError
     */
    public static getOrganisationsAll(): CancelablePromise<OrganisationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organisations/all',
            errors: {
                401: `Authentication required`,
            },
        });
    }
    /**
     * Fetch user's organisations
     * Retrieves non-deleted organisations associated with the authenticated user.
     * @returns OrganisationsResponse User organisations fetched successfully
     * @throws ApiError
     */
    public static getOrganisationsMy(): CancelablePromise<OrganisationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organisations/my',
            errors: {
                401: `Authentication required`,
            },
        });
    }
    /**
     * Update an organisation
     * Updates the provided fields of an existing organisation.
     * @param organisationId MongoDB ID of the organisation
     * @param requestBody
     * @returns OrganisationResponse Organisation updated successfully
     * @throws ApiError
     */
    public static patchOrganisations(
        organisationId: string,
        requestBody: UpdateOrganisationRequest,
    ): CancelablePromise<OrganisationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/organisations/{organisationId}',
            path: {
                'organisationId': organisationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid organisation ID or request body`,
                401: `Authentication required`,
                404: `Organisation not found`,
            },
        });
    }
    /**
     * Delete an organisation
     * Soft-deletes an existing organisation.
     * @param organisationId MongoDB ID of the organisation
     * @returns OrganisationResponse Organisation deleted successfully
     * @throws ApiError
     */
    public static deleteOrganisations(
        organisationId: string,
    ): CancelablePromise<OrganisationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/organisations/{organisationId}',
            path: {
                'organisationId': organisationId,
            },
            errors: {
                400: `Invalid organisation ID`,
                401: `Authentication required`,
                404: `Organisation not found`,
            },
        });
    }
}
