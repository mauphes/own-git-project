import React from 'react';
import Learn from './Learn';

export default {

  path: '/learn',

  action() {
    var userName = 'Евгений';
    var my_news = [
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
    ];
    return <Learn news={my_news} name={userName} />;
  },

};
