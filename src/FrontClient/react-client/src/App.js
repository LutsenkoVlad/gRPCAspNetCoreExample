import React from 'react';
import logo from './logo.svg';
import './App.css';

const { ClientsGrpcClient } = require('./clients_grpc_web_pb');
const { CreateClientRequest } = require('./clients_pb');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }

    this.callGrpcService = this.callGrpcService.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.client = new ClientsGrpcClient('http://localhost:9090', null, null);
  }

  setInputValue = (event) => {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue })
  }

  callGrpcService = () => {
    const request = new CreateClientRequest();
    request.setName(this.state.inputValue);

    this.client.createClient(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      } else {
        console.log(response.array[0])
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={this.state.inputValue} onChange={this.setInputValue} />
          <button style={{ padding: 10 }} onClick={this.callGrpcService}>Create client by gRPC request</button>
        </header>
      </div>
    );
  }
}

export default App;
