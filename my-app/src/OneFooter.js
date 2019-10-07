import React from 'react';

import './App.css';
import s from './App.module.css'


class OneFooter extends React.Component {


    render = () => {
        return (
            <div>
                <button className={s.bacgraund} onClick={this.props.onClick}
                        disabled={this.props.counterEditMode}>{this.props.action} </button>
            </div>
        );
    }
}


export default OneFooter;



