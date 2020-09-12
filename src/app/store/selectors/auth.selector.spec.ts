import { getIsAuth } from './auth.selectors';
import { AUTH_INITIAL_MOCK_STATE } from '../state/auth-initial-mock-state';

const state = AUTH_INITIAL_MOCK_STATE;

describe('Auth selectors', () => {
  it('should retrieve authState', () => {
    expect(getIsAuth.projector(state)).toBe(state.isAuth);
  });
});
