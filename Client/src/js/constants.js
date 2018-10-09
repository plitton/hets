// Paths
export const HOME_PATHNAME = 'home';
export const OWNERS_PATHNAME = 'owners';
export const EQUIPMENT_PATHNAME = 'equipment';
export const RENTAL_REQUESTS_PATHNAME = 'rental-requests';
export const RENTAL_AGREEMENTS_PATHNAME = 'rental-agreements';
export const PROJECTS_PATHNAME = 'projects';
export const USERS_PATHNAME = 'users';
export const ROLES_PATHNAME = 'roles';
export const VERSION_PATHNAME = 'version';
export const CONTACTS_PATHNAME = 'contacts';
export const DOCUMENTS_PATHNAME = 'documents';
export const BUSINESS_PORTAL_PATHNAME = '/business';
export const BUSINESS_DETAILS_PATHNAME = '/business/details';
export const DISTRICT_ADMIN_PATHNAME = 'district-admin';
export const LOGOUT = (process.env.NODE_ENV === 'production') ? //eslint-disable-line
  'https://logon.gov.bc.ca/clp-cgi/logoff.cgi' : 
  'https://logontest.gov.bc.ca/clp-cgi/logoff.cgi';

// Permissions
export const PERMISSION_LOGIN = 'Login';
export const PERMISSION_BUSINESS_LOGIN = 'BusinessLogin';
export const PERMISSION_ADMIN = 'Admin';
export const PERMISSION_USER_MANAGEMENT = 'UserManagement';
export const PERMISSION_ROLES_AND_PERMISSIONS = 'RolesAndPermissions';
export const PERMISSION_IMPORT_DATA = 'ImportData';
export const PERMISSION_CODE_TABLE_MANAGEMENT = 'CodeTableManagement';
export const PERMISSION_DISTRICT_CODE_TABLE_MANAGEMENT = 'DistrictCodeTableManagement';
export const PERMISSION_ASSIGN_INSPECTORS = 'ASSIGN_INSPECTORS';
export const PERMISSION_RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

// Roles 
export const ADMINISTRATOR_ROLE = 'Administrator';

// Equipments
export const EQUIPMENT_DAYS_SINCE_VERIFIED_WARNING = 270;
export const EQUIPMENT_DAYS_SINCE_VERIFIED_CRITICAL = 365;

export const EQUIPMENT_STATUS_CODE_PENDING = 'Unapproved';
export const EQUIPMENT_STATUS_CODE_APPROVED = 'Approved';
export const EQUIPMENT_STATUS_CODE_ARCHIVED = 'Archived';

// Owners
export const OWNER_STATUS_CODE_PENDING = 'Unapproved';
export const OWNER_STATUS_CODE_APPROVED = 'Approved';
export const OWNER_STATUS_CODE_ARCHIVED = 'Archived';

// Projects
export const PROJECT_STATUS_CODE_ACTIVE = 'Active';
export const PROJECT_STATUS_CODE_COMPLETED = 'Completed';

// Rental Requests
export const RENTAL_REQUEST_STATUS_CODE_IN_PROGRESS = 'In Progress';
export const RENTAL_REQUEST_STATUS_CODE_COMPLETED = 'Complete';
export const RENTAL_REQUEST_STATUS_CODE_CANCELLED = 'Cancelled';

// Rental Agreements
export const RENTAL_AGREEMENT_STATUS_CODE_ACTIVE = 'Active';
export const RENTAL_AGREEMENT_STATUS_CODE_COMPLETED = 'Completed';
export const RENTAL_RATE_PERIOD_HOURLY = 'Hr';
export const RENTAL_RATE_PERIOD_DAILY = 'Daily';

// Users
export const USER_STATUS_ACTIVE = 'Active';
export const USER_STATUS_ARCHIVED = 'Archived';

// Date Formats
export const DATE_FULL_MONTH_DAY_YEAR = 'MMMM D, YYYY';
export const DATE_SHORT_MONTH_DAY_YEAR = 'MMM D, YYYY';
export const DATE_YEAR_SHORT_MONTH_DAY = 'YYYY-MMM-DD';
export const DATE_ISO_8601 = 'YYYY-MM-DD';

export const DATE_ZULU = 'YYYY-MM-DDThh:mm:ss[Z]';

export const DATE_TIME_ISO_8601 = 'YYYY-MM-DDTHH:mm:ss';
export const DATE_TIME_READABLE = 'MMMM D, YYYY [at] h:mm:ss A';
export const DATE_TIME_LOG = 'YYYY/MM/DD HH:mm:ss';

// RegEx
export const EMAIL_REGEX = /\S+@\S+\.\S+/;
export const NANP_REGEX = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

// Conditions
export const NON_STANDARD_CONDITION = 'Other';

// ResponseTypes

export const RESPONSE_TYPE_BLOB = 'blob';

// Cloning
export const BY_PROJECT = 'By Project';
export const BY_EQUIPMENT = 'By Equipment';

export var headerHeight = 0;
export function setHeaderHeight(num) {
  headerHeight = num;
}

// Session
export const SESSION_TIMOUT = 7200000; // 120 minutes
