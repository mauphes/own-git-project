import {GET_PHOTOS_REQUEST, GET_PHOTOS_FAIL, GET_PHOTOS_SUCCESS, ADD_NEW_REQUEST, ADD_NEW_SUCCESS} from '../constants'

let photos = []
let news = [
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
]
let cached = false

function getMorePhotos(offset, count, dispatch) {
  VK.Api.call('photos.getAll', {extended: 1, count: count, offset: offset},(r) => { // eslint-disable-line no-undef
    try {
      photos = photos.concat(r.response)
      cached = true
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos
      })
    }
    catch(e) {
      dispatch({
        type: GET_PHOTOS_FAIL,
        error: true,
        payload: new Error(e)
      })
    }

  })
}

export function getPhotos() {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: photos
    })

    if (cached) {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos
      })
    } else {
      getMorePhotos(0,20,dispatch)
    }

  }
}

export function addNew(itemNew) {
  return function(dispatch){
    /*dispatch({
      type: ADD_NEW_REQUEST,
      payload: itemNew
    })*/
    //news = news.concat(itemNew)
    dispatch({
      type: ADD_NEW_SUCCESS,
      payload: itemNew
    })
  }
}

