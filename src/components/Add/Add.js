import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';

class Add extends Component {
    /*filterFunc = () => {
        this.props.filterFunc(this.refs.myTestInput.value);
    }*/
    render() {
      return (
        <form className={s.add}>
          <input type="text" className={s.add__author} defaultValue="" placeholder="Ваше имя" ref="author" />
          <textarea className={s.add__text} defaultValue="" placeholder="Текст новости" ref="text" />
          <label className={s.add__checkrule}>
            <input type="checkbox" defaultChecked={false} ref="checkrule" onChange={e => {this.setState({canSubmit : this.refs.checkrule.checked})}} />
            Я согласен с правилами
          </label>
          <button className={s.add__btn} disabled={this.state.canSubmit?"":"disabled"} onClick={this.onBtnClickHandler} ref="alert_button">
            Показать alert
          </button>
        </form>
      );
    }
  constructor(props,context) {
    super(props,context);
    this.state = {
      canSubmit: false
    };
  }
}

export default withStyles(s)(Add);
