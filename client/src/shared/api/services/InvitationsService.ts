/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvitationsService {
    /**
     * Fetch all organisation invitations
     * Retrieves all invitations belonging to the specified organisation.
     * @param organisationId MongoDB ID of the organisation.
     * @returns any Invitations fetched successfully
     * @throws ApiError
     */
    public static getInvitationOrganisationsAll(
        organisationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/invitation/organisations/{organisationId}/all',
            path: {
                'organisationId': organisationId,
            },
            errors: {
                400: `Invalid organisation ID`,
                401: `Authentication required`,
                403: `Insufficient permissions to view invitations`,
                404: `Organisation not found`,
            },
        });
    }
}
