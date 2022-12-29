import * as React from 'react';
import './style.css';
import PropTypes from 'prop-types';

interface Props {
  message: string;
}
interface State {
  n: number;
}

class App extends React.Component<Props, State> {
  // props默认值
  static defaultProps = {
    message: 'deafult msg',
  };
  // 自定义名称
  static displayname = '自定义名称';

  // 类型坚持
  static propTypes = {
    message: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      n: 11,
    };
  }
  // x() {
  //   console.log(this);
  // }
  // 使用箭头函数，让this指向App，否则window、undefined
  x = () => {
    console.log(this);
  };
  render() {
    return (
      <div>
        {this.props.message}
        <div>{this.state.n}</div>
        <button onClick={this.x}>click</button>
      </div>
    );
  }
}

export default App;
