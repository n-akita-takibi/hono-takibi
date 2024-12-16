import { describe, expect, it } from 'vitest'
import { capitalize } from './capitalize'

const capitalizeTestCases = [
  { input: 'posts', expected: 'Posts' },
  { input: 'postsId', expected: 'PostsId' },
  { input: 'userProfile', expected: 'UserProfile' },
  { input: 'userSettings', expected: 'UserSettings' },
  { input: 'userPreferences', expected: 'UserPreferences' },
  { input: 'userAvatar', expected: 'UserAvatar' },
  { input: 'userFollowers', expected: 'UserFollowers' },
  { input: 'userFollowing', expected: 'UserFollowing' },
  { input: 'userBlocked', expected: 'UserBlocked' },
  { input: 'authGoogle', expected: 'AuthGoogle' },
  { input: 'authFacebook', expected: 'AuthFacebook' },
  { input: 'authTwitter', expected: 'AuthTwitter' },
  { input: 'authGithub', expected: 'AuthGithub' },
  { input: 'twoFactorAuth', expected: 'TwoFactorAuth' },
  { input: 'passwordReset', expected: 'PasswordReset' },
  { input: 'emailVerification', expected: 'EmailVerification' },
  { input: 'articleDraft', expected: 'ArticleDraft' },
  { input: 'articlePublished', expected: 'ArticlePublished' },
  { input: 'articleArchived', expected: 'ArticleArchived' },
  { input: 'contentModeration', expected: 'ContentModeration' },
  { input: 'mediaUpload', expected: 'MediaUpload' },
  { input: 'mediaGallery', expected: 'MediaGallery' },
  { input: 'notificationEmail', expected: 'NotificationEmail' },
  { input: 'notificationPush', expected: 'NotificationPush' },
  { input: 'notificationSettings', expected: 'NotificationSettings' },
  { input: 'notificationPreferences', expected: 'NotificationPreferences' },
  { input: 'paymentMethod', expected: 'PaymentMethod' },
  { input: 'paymentHistory', expected: 'PaymentHistory' },
  { input: 'subscriptionPlan', expected: 'SubscriptionPlan' },
  { input: 'subscriptionCancel', expected: 'SubscriptionCancel' },
  { input: 'billingAddress', expected: 'BillingAddress' },
  { input: 'invoiceDownload', expected: 'InvoiceDownload' },
  { input: 'analyticsDaily', expected: 'AnalyticsDaily' },
  { input: 'analyticsWeekly', expected: 'AnalyticsWeekly' },
  { input: 'analyticsMonthly', expected: 'AnalyticsMonthly' },
  { input: 'statsOverview', expected: 'StatsOverview' },
  { input: 'adminDashboard', expected: 'AdminDashboard' },
  { input: 'adminUsers', expected: 'AdminUsers' },
  { input: 'adminRoles', expected: 'AdminRoles' },
  { input: 'adminPermissions', expected: 'AdminPermissions' },
  { input: 'adminLogs', expected: 'AdminLogs' },
  { input: 'apiKeys', expected: 'ApiKeys' },
  { input: 'apiUsage', expected: 'ApiUsage' },
  { input: 'apiDocs', expected: 'ApiDocs' },
  { input: 'webhooks', expected: 'Webhooks' },
  { input: 'searchAdvanced', expected: 'SearchAdvanced' },
  { input: 'searchHistory', expected: 'SearchHistory' },
  { input: 'filterCustom', expected: 'FilterCustom' },
  { input: 'filterSaved', expected: 'FilterSaved' },
  { input: 'integrationSlack', expected: 'IntegrationSlack' },
  { input: 'integrationDiscord', expected: 'IntegrationDiscord' },
  { input: 'integrationJira', expected: 'IntegrationJira' },
  { input: 'integrationGithub', expected: 'IntegrationGithub' },
]

describe('capitalize', () => {
  it.concurrent.each(capitalizeTestCases)(
    'capitalize($input) -> $expected',
    async ({ input, expected }) => {
      const result = capitalize(input)
      expect(result).toBe(expected)
    },
  )
})
