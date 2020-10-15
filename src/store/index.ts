import { set, get, clear } from 'idb-keyval';
import { createStore } from 'vuex'
import {
  FETCH_NEWS_DATA,
  FETCH_NEWS_IN_PROGRESS,
  FLASH_ERROR,
  FLASH_SUCCESS,
  FLASH_WARN
} from './store-names'
import {
  NEWS_DUMMY_DATA,
  ENUM_WARN,
  ENUM_ERROR,
  ENUM_SUCCESS
} from '../constants.js'

export const store = createStore({
  state: {
    flash: {
      message: 'This is default message with warning color box',
      type: ENUM_WARN
    },
    fetchNewsInProg: false,
    news: NEWS_DUMMY_DATA
  },
  mutations: {
    [FETCH_NEWS_DATA](state, payload) {
      state.news = payload.articles;
    },
    [FETCH_NEWS_IN_PROGRESS](state, flag) {
      state.fetchNewsInProg = flag;
    },
    [FLASH_SUCCESS](state, payload) {
      state.flash = payload;
    },
    [FLASH_ERROR](state, payload) {
      state.flash = payload;
    }
  },
  actions: {
    async getNews({ commit }) {
      try {
        const checkNews = await get('news');
        if (!checkNews) {
          commit(FETCH_NEWS_IN_PROGRESS, true);
          const API_URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=895d9f6ee7114862bebecb37d9322f11';
          const res = await fetch(API_URL, {
            mode: 'no-cors'
          });
          const data = await res.json();
          if (data) {
            set('news', data);
            commit(FETCH_NEWS_DATA, data);
            commit(FLASH_SUCCESS, {
              message: 'Successfully obtained news.',
              type: ENUM_SUCCESS
            })
          } else {
            commit(FLASH_WARN, {
              message: 'Something seems wrong in consuming the API',
              type: ENUM_WARN
            })
          }
        } else {
          commit(FETCH_NEWS_DATA, checkNews);
          commit(FLASH_SUCCESS, {
            message: 'Successfully loaded from database.',
            type: ENUM_SUCCESS
          })
        }
      } catch (error) {
        clear();
        console.error("Customized Get News : ", error);
        commit(FLASH_ERROR, {
          message: 'Something is wrong',
          type: ENUM_ERROR
        })
      } finally {
        commit(FETCH_NEWS_IN_PROGRESS, false);
      }
    }
  },
  getters: {
    flashInfo(state) {
      return state.flash;
    },
    newsList(state) {
      return state.news;
    }
  }
})
