import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Article.scss';
import Link from '../Link';

class Article extends Component {
    onYearBtnClick(e) {
      this.props.getPhotos(e.target.textContent)
    }
    render() {
      let {title, author, text, fullText} = this.props.news,
          {user, year, fetching} = this.props,
          visible = this.state.visible;

      return (
          <div className={s.root}>
              <h3>{title}, {user}</h3>
              <p className={s.news_author}>{author}:</p>
              {visible ?
                  (<p className={s.news_text}>{fullText}</p>) :
                  (<p className={s.news_text}>{text}</p>)
              }
              <div className={s.inside}>
                  <Link to="#" onClick={e => {e.preventDefault(); this.setState({visible : !this.state.visible})}}>{visible ? 'Свернуть' : 'Подробнее'}</Link>
              </div>
            <button onClick={::this.onYearBtnClick}>2014</button>
            <button onClick={::this.onYearBtnClick}>2015</button>
            <button onClick={::this.onYearBtnClick}>2016</button>
            {
              fetching ?
                <p>Загрузка...</p>
              :
                <p>{year}</p>
            }
          </div>
      );
    }
    constructor(props,context) {
        super(props,context);
        this.state = {
            visible: false
        };
    }
}

export default withStyles(s)(Article);
