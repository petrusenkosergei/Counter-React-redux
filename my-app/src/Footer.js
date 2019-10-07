import React from 'react';

import './App.css';
import OneFooter from "./OneFooter";
import {connect} from "react-redux";
import {clickMinusAC, clickPlusAC} from "./reducer";


class Footer extends React.Component {

    _plus = () => this.props.plus();
    _minus = () => this.props.minus();


    render = () => {
        const tasksElements = this.props.tasks.map((t) => {
                return <OneFooter action={t.action} onClick={t.action === 'Плюс' ? this._plus: this._minus} counterEditMode={this.props.counterEditMode}/>;
            }
        );

        return (
            <div className="Footer">
                {tasksElements}
            </div>
        );
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: () => {
            dispatch(clickPlusAC())
        },
        minus: () => {
            dispatch(clickMinusAC())
        }
    }
    };


export default connect(null, mapDispatchToProps)(Footer);


