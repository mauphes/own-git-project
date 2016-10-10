import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Photos.scss';
import Link from '../Link';

class Photos extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos()
  }
  render() {
    let {year, fetching, photos, error} = this.props;

    return (
      <div className={s.root}>
        <button onClick={::this.onYearBtnClick}>Показать фотки</button>
        {
          fetching ?
            <p>Загрузка...</p>
            :
            (photos.map((item, key) =>
              <div key={key} className='photo'>
                <p><img src={item.src_big} /></p>
                {item.likes != undefined ? <p>{item.likes.count != 0 ? item.likes.count : 'У этой фотографии нету лайков'} ❤</p> : ''}
              </div>
            ))
        }

        <hr/>
        { error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : '' }
      </div>
    );
  }
}

export default withStyles(s)(Photos);
