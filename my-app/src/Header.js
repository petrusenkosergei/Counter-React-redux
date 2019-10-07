import React from 'react';
import s from './App.module.css'

import './App.css';


class Header extends React.Component {


    render = () => {
        return (
            <div className={s.BacgraundHeader}>
                {this.props.counterEditMode
                    ? <h6>Enter start values</h6>
                    : <h6> {this.props.count}</h6>}
            </div>
        );
    }


}


export default Header;
