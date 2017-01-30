const DEV_API_ROOT = 'http://54.92.205.230/ad-image-api-service';
const STAGE_API_ROOT = 'http://localhost:2220/ad-image-api-service';
const PROD_API_ROOT = 'http://' + window.location.host + '/ad-image-api-service';


const API_GET = DEV_API_ROOT + '/get_all_ads';
const API_GET_BIDDERS = DEV_API_ROOT + '/get_all_bidders';
const API_GET_DEVICE_TYPES = DEV_API_ROOT + '/get_all_device_types';
const API_POST = DEV_API_ROOT + '/update_status';

const GOOGLE_IDENTITY_ROOT = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_VALIDATION = 'https://www.googleapis.com/oauth2/v3/tokeninfo';

const HELP_PATH = './NemesisOLH/side_nav/index.htm#t=';

export default {
  API_GET,
  API_GET_BIDDERS,
  API_GET_DEVICE_TYPES,
  API_POST,
  GOOGLE_IDENTITY_ROOT,
  GOOGLE_TOKEN_VALIDATION,
  HELP_PATH
}
