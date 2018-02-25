import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// 사용자 정의 클래스
// 맞게 정의했는지 확인이 필요
class User extends Component {
  render() {
    var firstName = 'Hyeonwoo', lastName = 'Kim';

    return (
      <div className="User">
        <h2>firstName:{firstName}, lastName:{lastName}</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const helloWorld = '리액트 월드~';

    return (
      <div className="App">
        <h2>리액트에 오신 여러분을 환영합니다</h2>
        <h2>{helloWorld}</h2>
        <User />
        {/* {list.map(function (item) {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )
        })} */
          list.map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>, {item.author}, </span>
              <span>{item.num_comments}, </span>
              <span>{item.points}</span>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
