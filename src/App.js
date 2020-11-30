import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addEmployee, deleteEmployee } from './redux/actions/employee.actions'

function Employee(props) {
  const {handleDelete, handleEdit, employee} = props;
  const {name, email, age} = employee;
  return (
    <div className="employee">
      <span>{name}</span>
      <span>{email}</span>
      <span>{age}</span>
      {/* <button onClick={() => handleEdit(employee)}>Edit</button> */}
      <button onClick={() => handleDelete(employee)}>Delete</button>
    </div>
  );
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      age: 0,
    }
  }

  componentDidMount() {

  }

  handleEdit = (employee) => {
    const employees = this.state.employees.map(emp => {
      if(emp.id === employee.id) {
        return employee;
      }
      return emp;
    });

    this.setState({
      name: employee.name
    });
  }

  handleDelete = (employee) => {
    this.props.dispatch(deleteEmployee(employee));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    
    // const employees = [...this.state.employees, {id: this.state.employees.length+1, name: this.state.name, email: this.state.email, age: this.state.age}];

    // this.setState({
    //   employees
    // });

    const employee = {
      ...this.state,
      id: this.props.employees.length+1
    }

    this.props.dispatch(addEmployee(employee));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {

    const employess = this.props.employees.map((employee, index) => (
      <Employee key={index} employee={employee} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
    ));

    return (
      <div className="App">
        <h1>Employee Directory</h1>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.name} placeholder="Name" id="name"/>
          <input onChange={this.handleChange} value={this.state.age} type="number" placeholder="Age" id="age"/>
          <input onChange={this.handleChange} value={this.state.email} type="email" placeholder="Email" id="email"/>
          <button type="submit">Add</button>
        </form>

        <div className="employee-list">
          {employess}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    employees: store
  }
}

export default connect(mapStateToProps)(App);