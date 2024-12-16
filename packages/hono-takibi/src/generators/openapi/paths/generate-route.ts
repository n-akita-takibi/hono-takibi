import { Operation } from '../../../types'
import { generateCreateRoute } from './generate-create-route'
import { generateRequestParameter } from '../../request/params/generate-request-parameter'
import { generateResponseSchema } from '../../response/schemas/generate-response-schema'
import { generateRouteName } from './generate-route-name'

/**
 * Generates TypeScript code for a Hono route based on OpenAPI operation details
 *
 * @function generateRoute
 * @param path - The URL path pattern for the route
 * @param method - The HTTP method (GET, POST, etc.)
 * @param operation - The OpenAPI Operation object containing route details
 * @returns Generated TypeScript code string for the route
 *
 * @example
 * const operation = {
 *   tags: ['users'],
 *   description: 'Create a new user',
 *   security: [{ bearerAuth: [] }],
 *   requestBody: {
 *     content: {
 *       'application/json': {
 *         schema: { $ref: '#/components/schemas/CreateUserInput' }
 *       }
 *     }
 *   },
 *   responses: {
 *     '201': {
 *       description: 'User created successfully',
 *       content: {
 *         'application/json': {
 *           schema: { $ref: '#/components/schemas/User' }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * const route = generateRoute('/users', 'post', operation)
 * // Returns: TypeScript code for a type-safe POST /users route
 *
 * @note
 * - Generates a complete route definition including:
 *   - Route name based on method and path
 *   - OpenAPI tags for documentation
 *   - HTTP method and path
 *   - Route description
 *   - Security requirements
 *   - Request parameters and body validation
 *   - Response schemas for different status codes
 * - All components are properly escaped and formatted
 * - Handles optional parameters appropriately
 * - Integrates with Hono's createRoute function
 */
export function generateRoute(path: string, method: string, operation: Operation): string {
  const { tags, description, security, parameters, requestBody, responses } = operation
  const routeName = generateRouteName(method, path)
  const tagList = tags ? JSON.stringify(tags) : '[]'
  const requestParams = generateRequestParameter(parameters, requestBody)
  const create_args = {
    routeName,
    tagsCode: `tags:${tagList},`,
    methodCode: `method:'${method}',`,
    pathCode: `path:'${path}',`,
    descriptionCode: description ? `description:'${description}',` : '',
    securityCode: security ? `security:${JSON.stringify(security)},` : '',
    requestParams: requestParams ? `${requestParams}` : '',
    responsesCode: responses ? `responses:{${generateResponseSchema(responses)}}` : '',
  }
  return generateCreateRoute(create_args)
}