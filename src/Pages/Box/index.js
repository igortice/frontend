import React, { Component } from 'react';
import { FaFile } from 'react-icons/fa';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default class Box extends Component {
  state = { box: {} };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await api.get(`boxes/${id}`);

    this.setState({ box: response.data });
  }
  render() {
    const { box } = this.state;
    return (
      <div className='row'>
        <div className='card col-12'>
          {Object.keys(box).length !== 0 ? (
            <div className='card-body'>
              <h5 className='card-title'>Box - {box.title}</h5>
              <ul className='list-group'>
                {box.files &&
                  box.files.map((file) => (
                    <li key={file.id} className='list-group-item d-flex justify-content-between align-items-center'>
                      <a href={file.url} target='_blank'>
                        <FaFile color='orange' size='22' />{' '}
                        <small>{file.title}</small>
                      </a>
                      <small className='text-muted'>
                        há{' '}
                        {distanceInWords(file.createdAt, new Date(), {
                          locale: pt
                        })}
                      </small>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div className='text-center p-3'>
              <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
