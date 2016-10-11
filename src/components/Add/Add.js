import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';

class Add extends Component {
    onAddNewButton = e => {
      e.preventDefault();
      let author = this.props.userName,
          title = this.refs.title.value,
          message = this.refs.message.value;
      this.props.addNew({title: title, author: author, text: message, fullText: message});
    }
    render() {
      let {userName} = this.props;
      return (
        <form className={s.add}>
          <input type="text" className={s.add__author} value={userName} placeholder="Ваше имя" ref="author" />
          <input type="text" className={s.add__author} defaultValue="" placeholder="Введите заголовок" ref="title"/>
          <textarea className={s.add__text} defaultValue="" placeholder="Текст новости" ref="message" />
          <label className={s.add__checkrule}>
            <input type="checkbox" defaultChecked={false} ref="checkrule" onChange={e => {this.setState({canSubmit : this.refs.checkrule.checked})}} />
            Я согласен с правилами
          </label>
          <button className={s.add__btn} disabled={this.state.canSubmit?"":"disabled"} onClick={this.onAddNewButton} ref="alert_button">
            Добавить новость
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
