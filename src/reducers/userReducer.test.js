import { userReducer } from '../reducers/userReducer';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is UPDATE_USER', () => {
    const initialState = {};
    const action = {
      type: 'UPDATE_USER',
      user: {id: 1, name: 'placeholder', email: 'placeholder', ratings: []}
    };
    const result = userReducer(initialState, action);
    const expectedState = {id: 1, name: 'placeholder',
      email: 'placeholder', ratings: []};

    expect(result).toEqual(expectedState);
  });
});
