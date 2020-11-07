import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions';


class Persons extends Component {
    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return { persons: prevState.persons.filter(person => person.id !== personId) }
        });
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleted(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({ type: actionTypes.ADDPERSON }),
        onPersonDeleted: (id) => dispatch({ type: actionTypes.DELETEPERSON, personId: id })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);