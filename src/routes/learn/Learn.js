import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Learn.scss';
import Article from '../../components/Article';
import Input from '../../components/Input';

class Learn extends Component {


  filterFunc(val){
    this.setState({inputValue: val});
  }

  render() {
      var news = this.props.news;
      var name = this.props.name;

      var sorteredNews = this.state.sorteredNews;
      var inputValue = this.state.inputValue;


    var Person = {
      constructor: function(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
      },
      hello: function(){
        console.log("Hello, my name is " + this.name + ", I'm " + this.age + " years old");
      }
    };

    var personOne = Object.create(Person).constructor("Eugene", 26, "male");
    var personTwo = Object.create(Person).constructor("Kate", 32, "female");

    personOne.hello();
    personOne.name = "JAck";
    personOne.hello();
    personOne.hello = function(){
      console.log("Hello");
    };
    personOne.hello();
    console.log(personTwo.gender);
    personTwo.hello();

    var WebDeveloper = Object.create(Person);
    WebDeveloper.constructor = function(name, age, gender, skills){
      Person.constructor.apply(this, arguments);
      this.skills = skills || [];
      return this;
    };

    var developer = Object.create(WebDeveloper).constructor("Eugene", 25, "male", ["html", "css", "js", "php"]);
    console.log(developer.skills);

    var product = {
      name: "оливье",
      price: 550,
      difficult: 3,
      product_name: function(){
        return this.name;
      },
      toJSON: function(){
        return {
          name: this.name,
          price: this.price
        }
      }
    };

    Person.work = function(){
      console.log("Working...");
    };
    Person.eat = function(){
      console.log(this.name + " ест " + product.product_name());
    };

    developer.hello();
    developer.work();
    developer.eat();

    var productJSON = JSON.stringify(product);
    console.log(productJSON);
    productJSON = JSON.parse(productJSON);
    console.log(productJSON);

    news = news.filter(function(e){
      return e.text.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    });
    if(sorteredNews){
      var filterArr = [];
      console.log(Object.keys(news).length);
      for(var i = Object.keys(news).length;i--;){
        filterArr.push(news[i]);
      }
      news = filterArr.sort(function(a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });


      console.log(filterArr);
    }


    var counter = function(num){
      counter.count = num ? num : counter.count;
      return counter.count++;
    };

    var counter2 = (function(){
      var count = 0;
      return function(num){
        count = num ? num : count;
        return count++;
      }
    }());

    counter.count = 0;
    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());

    counter2(500);
    console.log(counter2());
    console.log(counter2());
    console.log(counter2());
    console.log(counter2());
    console.log(counter2());
    console.log(counter2());


      return (
          <div className={s.root}>
              <div className={s.container}>
                  <Input filterFunc={this.filterFunc.bind(this)} />
                  <div>
                    <div style={{cursor: "pointer"}} onClick={e => {e.preventDefault(); this.setState({sorteredNews : true})}}>{this.state.sorteredNews ? <span>Сортируется по алфавиту</span> : <span>Сортировать по алфавиту</span>}</div>
                    <div style={{cursor: "pointer"}} onClick={e => {e.preventDefault(); this.setState({sorteredNews : false})}}>Не сортировать по алфавиту</div>
                  </div>
                  <h1 className={s.title}>Здравствуйте, {name}, почитайте наши новости:</h1>
                  <div>
                    Вы ввели: {inputValue}
                  </div>
                  {news.length > 0 ?
                    news.map(function(item, key) {
                          return <Article news={item} key={key} />
                      }
                  ) : <div className={s.nope}>новостей нету</div>}
                  {news.length > 0 ? <div className={s.all_news} onClick={e => {e.preventDefault(); this.setState({counter : ++this.state.counter})}}>Всего новостей: {news.length}</div> : ''}
                  <div>Всего кликов: {this.state.counter}</div>
              </div>
          </div>
      );
  }
    constructor(props,context) {
        super(props,context);
        this.state = {
            counter: 0,
            inputValue: "",
            sorteredNews: false
        };
    }
}

export default withStyles(s)(Learn);
