import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL, ADD_NEW_REQUEST, ADD_NEW_SUCCESS} from "../constants";

const initialState = {
  year: 2016,
  news: [
    {
      title: 'Заголовок1',
      author: 'Саша Печкин',
      text: 'В четверг, четвертого числа...',
      fullText: 'В четверг, четвертого числа и так далее'
    },
    {
      title: 'Заголовок4',
      author: 'Просто Вася',
      text: 'Считаю, что $ должен стоить 35 рублей!',
      fullText: 'АВ четверг, четвертого числа и так далее'
    },
    {
      title: 'Заголовок5',
      author: 'Гость',
      text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
      fullText: 'В четверг, четвертого числа и так далее'
    },
    {
      title: 'Заголовок3',
      author: 'Гость',
      text: 'АБесплатно. Скачать. Лучший сайт - http://localhost:3000',
      fullText: 'В четверг, четвертого числа и так далее'
    }
  ],
  fetching: false,
  error: '',
  photos: []
};

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, fetching: true, error: '' }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, fetching: false, error: '' }

    case GET_PHOTOS_FAIL:
      return { ...state, error: action.payload.message, fetching: false }

    case ADD_NEW_REQUEST:
      return { ...state, itemNew: action.payload, fetching: true, error: '' }

    case ADD_NEW_SUCCESS:
      return { ...state, news: [].concat(state.news || [], [action.payload]), fetching: false, error: '' }

    default:
      return state;
  }

}
