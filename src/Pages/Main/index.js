import React, { Component } from 'react';

import api from '../../services/api';

export default class extends Component {
  state = { newBox: '', loading: false };

  _handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    let response = null;
    if (this.state.newBox !== '') {
      response = await api.post('boxes', {
        title: this.state.newBox
      });
    }
    this.setState({ loading: false });

    this.props.history.push(`/box/${response.data._id}`);
  };

  _handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    const { loading, newBox } = this.state;

    return (
      <div
        style={{ height: '80vh' }}
        className='row justify-content-md-center align-items-center'
      >
        <div className='card col-6 py-5'>
          <div className='card-body'>
            <form onSubmit={this._handleSubmit}>
              <div className='form-group'>
                <input
                  className='form-control form-control-lg'
                  placeholder='Nome Box'
                  value={newBox}
                  onChange={this._handleInputChange}
                />
              </div>
              <button
                className='btn btn-primary btn-block btn-lg'
                type='submit'
                disabled={loading}
              >
                {loading ? (
                  <div>
                    <span
                      className='spinner-grow'
                      style={{ width: '1.5rem', height: '1.5rem' }}
                      role='status'
                      aria-hidden='true'
                    />
                    Aguarde...
                  </div>
                ) : (
                  'Criar Box'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
