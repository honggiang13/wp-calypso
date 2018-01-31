/** @format */
/**
 * External dependencies
 */
import { castArray } from 'lodash';

/**
 * Internal dependencies
 */
import {
	DOMAIN_MANAGEMENT_VALIDATION_SCHEMA_ADD,
	DOMAIN_MANAGEMENT_VALIDATION_SCHEMA_REQUEST,
} from 'state/action-types';

/**
 * Action creator function: DOMAIN_MANAGEMENT_VALIDATION_SCHEMA_ADD
 *
 * @param  {Object} data   object of { tld: schemaObject } pairs
 * @return {Object} action object
 */
export const addValidationSchema = schemas => ( {
	type: DOMAIN_MANAGEMENT_VALIDATION_SCHEMA_ADD,
	schemas,
} );

/**
 * Action creator to request tld validation schemas: DOMAIN_MANAGEMENT_VALIDATION_SCHEMA_REQUEST
 *
 * @param  {String|Array<String>} tlds List of tlds that we're requesting schemas for
 * @return {Object} action object
 */
export const requestValidationSchemas = tlds => ( {
	type: DOMAIN_MANAGEMENT_VALIDATION_SCHEMA_REQUEST,
	tlds: castArray( tlds ),
} );