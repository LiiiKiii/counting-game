export default {
  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/somePath') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {},
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
