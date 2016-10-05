import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Article.scss';
import Link from '../Link';

class Article extends Component {
    render() {
      var title = this.props.news.title,
          author = this.props.news.author,
          text = this.props.news.text,
          fullText = this.props.news.fullText,
          visible = this.state.visible;

      return (
          <div className={s.root}>
              <h3>{title}</h3>
              <p className={s.news_author}>{author}:</p>
              {visible ?
                  (<p className={s.news_text}>{fullText}</p>) :
                  (<p className={s.news_text}>{text}</p>)
              }
              <div className={s.inside}>
                  <Link to="#" onClick={e => {e.preventDefault(); this.setState({visible : !this.state.visible})}}>{visible ? 'Свернуть' : 'Подробнее'}</Link>
              </div>
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
