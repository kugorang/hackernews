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
  {
    title: '김현우',
    url: 'https://github.com/kugorang',
    author: 'Kim Hyeonwoo',
    num_comments: 1,
    points: 1,
    objectID: 2,
  }
];

// function isSearched(searchTerm) {
//   return function (item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const largeColumn = {
  width: '40%',
}

const midColumn = {
  width: '30%',
}

const smallColumn = {
  width: '10%',
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    // onClick 핸들러 안에 인라인으로 함수를 작성할 수 있으나,
    // 코드 가독성이 떨어짐
    // const updateList = this.state.list.filter(item => item.objectID !== id);

    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);

    // function isNotId(item) {
    //   return item.objectID !== id;
    // }

    // const updatedList = this.state.list.filter(isNotId);

    // const updateList = this.state.list.filter(function isNotId(item) {
    //   return item.objectID !== id;
    // });

    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
        </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        {/* <form>
          <input
            type="text"
            value={searchTerm}
            onChange={this.onSearchChange}
          />
        </form> */}
        {
          // list.filter(isSearched(searchTerm)).map(item => {
          //   return (
          //     <div key={item.objectID}>
          //       <span>
          //         <a href={item.url}>{item.title}</a>
          //       </span>
          //       <span>{item.author}</span>
          //       <span>{item.num_comments}</span>
          //       <span>{item.points}</span>
          //       <span>
          //         <button
          //           onClick={() => this.onDismiss(item.objectID)}
          //           type="button"
          //         >
          //           Dismiss
          //       </button>
          //       </span>
          //     </div>
          //   );
          // }
          // )
        }
      </div>
    );
  }
}

// class Search extends Component {
//   render() {
//     const { value, onChange, children } = this.props;

//     return (
//       <form>
//         {children} <input
//           type="text"
//           value={value}
//           onChange={onChange}
//         />
//       </form>
//     )
//   }
// }

const Search = ({ value, onChange, children }) => {

  // 해야할 일

  return (
    <form>
      {children} <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

// class Table extends Component {
//   render() {
//     const { list, pattern, onDismiss } = this.props;

//     return (
//       <div>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//             <span>
//               <Button onClick={() => onDismiss(item.objectID)}>
//                 Dismiss
//               </Button>
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const Table = ({ list, pattern, onDismiss }) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={midColumn}>
          {item.author}
        </span>
        <span style={smallColumn}>
          {item.num_comments}
        </span>
        <span style={smallColumn}>
          {item.points}
        </span>
        <span style={smallColumn}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>

class Button extends Component {
  render() {
    const {
      onClick,
      className = '',
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export default App;
