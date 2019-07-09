/* eslint-disable no-unused-vars */
// ui
const TOGGLE_DRAWER = 'app/Drawer/TOGGLE_DRAWER';
const SET_VIEWPORT_SIZE = 'app/Viewport/SET_VIEWPORT_SIZE';
const SET_HERO_SETTINGS = 'app/Hero/SET_HERO_SETTINGS';
const SET_ADD_TO_HOMESCREEN = 'app/APP/SET_ADD_TO_HOMESCREEN';
// router
const SET_ROUTE = 'app/Routing/SET_ROUTE';
const SET_SUB_ROUTE = 'app/Routing/SET_SUB_ROUTE';
// dialogs
const OPEN_DIALOG = 'app/Dialogs/OPEN_DIALOG';
const CLOSE_DIALOG = 'app/Dialogs/CLOSE_DIALOG';
const SET_DIALOG_DATA = 'app/Dialogs/SET_DIALOG_DATA';
const SET_DIALOG_ERROR = 'app/Dialogs/SET_DIALOG_ERROR';
// eslint-disable-next-line no-redeclare
const DIALOGS = {
  SPEAKER: 'speaker',
  PREVIOUS_SPEAKER: 'previousSpeaker',
  SESSION: 'session',
  SUBSCRIBE: 'subscribe',
  SIGNIN: 'signin',
};
// toast
const SHOW_TOAST = 'app/Toast/SHOW_TOAST';
const HIDE_TOAST = 'app/Toast/HIDE_TOAST';

// tickets
const FETCH_TICKETS = 'app/Tickets/FETCH_TICKETS';
const FETCH_TICKETS_FAILURE = 'app/Tickets/FETCH_TICKETS_FAILURE';
const FETCH_TICKETS_SUCCESS = 'app/Tickets/FETCH_TICKETS_SUCCESS';

// partners
const FETCH_PARTNERS = 'app/Partners/FETCH_PARTNERS';
const FETCH_PARTNERS_FAILURE = 'app/Partners/FETCH_PARTNERS_FAILURE';
const FETCH_PARTNERS_SUCCESS = 'app/Partners/FETCH_PARTNERS_SUCCESS';

const ADD_POTENTIAL_PARTNER = 'app/Partners/ADD_POTENTIAL_PARTNER';
const ADD_POTENTIAL_PARTNER_FAILURE = 'app/Partners/ADD_POTENTIAL_PARTNER_FAILURE';
const ADD_POTENTIAL_PARTNER_SUCCESS = 'app/Partners/ADD_POTENTIAL_PARTNER_SUCCESS';

// featured videos
const FETCH_VIDEOS = 'app/Videos/FETCH_VIDEOS';
const FETCH_VIDEOS_FAILURE = 'app/Videos/FETCH_VIDEOS_FAILURE';
const FETCH_VIDEOS_SUCCESS = 'app/Videos/FETCH_VIDEOS_SUCCESS';

// video dialog
const TOGGLE_VIDEO_DIALOG = 'app/Dialogs/TOGGLE_VIDEO_DIALOG';

// blog
const FETCH_BLOG_LIST = 'app/Blog/FETCH_BLOG_LIST';
const FETCH_BLOG_LIST_FAILURE = 'app/Blog/FETCH_BLOG_LIST_FAILURE';
const FETCH_BLOG_LIST_SUCCESS = 'app/Blog/FETCH_BLOG_LIST_SUCCESS';

// speakers
const FETCH_SPEAKERS = 'app/Speakers/FETCH_SPEAKERS';
const FETCH_SPEAKERS_FAILURE = 'app/Speakers/FETCH_SPEAKERS_FAILURE';
const FETCH_SPEAKERS_SUCCESS = 'app/Speakers/FETCH_SPEAKERS_SUCCESS';

// previous speakers
const FETCH_PREVIOUS_SPEAKERS = 'app/PreviousSpeakers/FETCH_SPEAKERS';
const FETCH_PREVIOUS_SPEAKERS_FAILURE = 'app/PreviousSpeakers/FETCH_SPEAKERS_FAILURE';
const FETCH_PREVIOUS_SPEAKERS_SUCCESS = 'app/PreviousSpeakers/FETCH_SPEAKERS_SUCCESS';

// sessions
const FETCH_SESSIONS = 'app/Sessions/FETCH_SESSIONS';
const FETCH_SESSIONS_FAILURE = 'app/Sessions/FETCH_SESSIONS_FAILURE';
const FETCH_SESSIONS_SUCCESS = 'app/Sessions/FETCH_SESSIONS_SUCCESS';
const UPDATE_SESSIONS = 'app/Sessions/UPDATE_SESSIONS';

const FETCH_USER_FEATURED_SESSIONS = 'app/Sessions/FETCH_USER_FEATURED_SESSIONS';
const FETCH_USER_FEATURED_SESSIONS_FAILURE = 'app/Sessions/FETCH_USER_FEATURED_SESSIONS_FAILURE';
const FETCH_USER_FEATURED_SESSIONS_SUCCESS = 'app/Sessions/FETCH_USER_FEATURED_SESSIONS_SUCCESS';

const SET_USER_FEATURED_SESSIONS = 'app/Sessions/SET_USER_FEATURED_SESSIONS';
const SET_USER_FEATURED_SESSIONS_FAILURE = 'app/Sessions/SET_USER_FEATURED_SESSIONS_FAILURE';
const SET_USER_FEATURED_SESSIONS_SUCCESS = 'app/Sessions/SET_USER_FEATURED_SESSIONS_SUCCESS';
// schedule
const FETCH_SCHEDULE = 'app/Schedule/FETCH_SCHEDULE';
const FETCH_SCHEDULE_FAILURE = 'app/Schedule/FETCH_SCHEDULE_FAILURE';
const FETCH_SCHEDULE_SUCCESS = 'app/Schedule/FETCH_SCHEDULE_SUCCESS';

// gallery
const FETCH_GALLERY = 'app/Gallery/FETCH_GALLERY';
const FETCH_GALLERY_FAILURE = 'app/Gallery/FETCH_GALLERY_FAILURE';
const FETCH_GALLERY_SUCCESS = 'app/Gallery/FETCH_GALLERY_SUCCESS';

// team
const FETCH_TEAM = 'app/Team/FETCH_TEAM';
const FETCH_TEAM_FAILURE = 'app/Team/FETCH_TEAM_FAILURE';
const FETCH_TEAM_SUCCESS = 'app/Team/FETCH_TEAM_SUCCESS';

// user
const SIGN_IN = 'app/Auth/SIGN_IN';
const SIGN_OUT = 'app/Auth/SIGN_OUT';

// subscribe
const SUBSCRIBE = 'app/Subscribe/SUBSCRIBE';

// notifications
const UPDATE_NOTIFICATIONS_STATUS = 'app/Notifications/UPDATE_NOTIFICATIONS_STATUS';
// eslint-disable-next-line no-redeclare
const NOTIFICATIONS_STATUS = {
  GRANTED: 'granted',
  DENIED: 'denied',
  DEFAULT: 'default',
};

// filters
const SET_FILTERS = 'app/Filters/SET_FILTERS';
