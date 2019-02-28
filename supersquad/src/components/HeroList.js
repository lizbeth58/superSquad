import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions/index';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.heros.map(hero => {
            return (
              <li className="list-group-item" key={hero.id}>
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  x
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heros: state.heros
  };
}

export default connect(
  mapStateToProps,
  { removeCharacterById }
)(HeroList);
