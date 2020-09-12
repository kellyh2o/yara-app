import { ApplicationState } from './application-state.model';
import { AUTH_INITIAL_MOCK_STATE } from './auth-initial-mock-state';
import { JOURNAL_INITIAL_MOCK_STATE } from './journal-initial-mock-state';

export const APP_INTIAL_MOCK_STATE: ApplicationState = {
  authState: AUTH_INITIAL_MOCK_STATE,
  journalState: JOURNAL_INITIAL_MOCK_STATE
};
