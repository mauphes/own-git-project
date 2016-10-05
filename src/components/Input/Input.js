import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Input.scss';

class Article extends Component {
    filterFunc = () => {
        this.props.filterFunc(this.refs.myTestInput.value);
    };
    render() {
      return (
          <div className={s.root}>
              <input defaultValue=""  ref="myTestInput" placeholder="Введите значение" onChange={this.filterFunc}/>
              <button onClick={this.filterFunc}>Найти</button>
          </div>
      );
    }
}

export default withStyles(s)(Article);
