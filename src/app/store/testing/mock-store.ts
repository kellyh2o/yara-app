import { ActionsSubject, ReducerManager } from '@ngrx/store';
import { MockState, MockStore } from '@ngrx/store/testing';
import { ApplicationState } from '../models/application-state.model';
import { APP_INITIAL_MOCK_STATE } from '../state/application-initial-mock-state';

const mockState$: MockState<ApplicationState> = new MockState();
const actionsSubject$: ActionsSubject = new ActionsSubject();
const reducerManager$: ReducerManager = new ReducerManager(
  null,
  null,
  null,
  () => null // noop
);

export const MOCK_STORE$: MockStore<ApplicationState> = new MockStore(
  mockState$,
  actionsSubject$,
  reducerManager$,
  APP_INITIAL_MOCK_STATE
);
