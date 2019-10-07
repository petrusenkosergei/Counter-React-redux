import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import s from './App.module.css'
import {connect} from "react-redux";
import {
    changeStartValuesAC,
    setMaxValueAC,
    setMinValueAC,
    setResetAC,
    setStartValueAC,
    setValueAC
} from "./reducer";


class App extends React.Component {


    // clickPlus = () => {
    //     if (this.state.countStart < this.state.highLimit) {
    //         this.setState({
    //             countStart: this.state.countStart + 1
    //         });
    //     }
    //
    //
    // };
    // clickMinus = () => {
    //     if (this.state.countStart > this.state.lowLimit) {
    //         this.setState({
    //             countStart: this.state.countStart - 1
    //         });
    //     }
    // };


    // state = {
    //     tasks: [
    //         {action: 'Плюс', callback: this.clickPlus},
    //         {action: 'Минус', callback: this.clickMinus},
    //     ],
    //     count: 0,
    //     countStart: 0,
    //     lowLimit: 0,
    //     highLimit: 0,
    //     editMode: false,
    //     counterEditMode: true
    //
    // };

    reset() {
        this.props.setReset({countStart: this.props.state.count});
    }

    handleChangeMax = (e) => {

        this.props.setMaxValue(Number(e.currentTarget.value))
    };

    handleChangeMin =(e) => {

        // if (e.currentTarget.value === "") this.setState({lowLimit: 0});
        // this.setState({lowLimit: Number(e.currentTarget.value)})
        this.props.setMinValue(Number(e.currentTarget.value))
    };

    handleChangeStart = (e) => {
        this.props.setStartValue(Number(e.currentTarget.value));
    };

    setValues = () => {
        this.props.setNewValue({editMode: true, counterEditMode: false, countStart: this.props.state.count})
    };

    changeStartValue = () => {
        this.props.changeStartValues({counterEditMode: true, editMode: false})
    };

    render = () => {

        const Reset = ({reset}) => (
            <div className="reset" onClick={reset}>reset</div>
        );

        return (
            <div className="App">
                <ul>
                    <div className={s.BacgraundToo}>
                        <Header count={this.props.state.countStart} counterEditMode={this.props.state.counterEditMode}/>
                        <Footer tasks={this.props.state.tasks} counterEditMode={this.props.state.counterEditMode}/>
                        <div className={s.buttonReset}>
                            <Reset reset={(e) => this.reset(e)} counterEditMode={this.props.state.counterEditMode}/>
                        </div>
                        <div className={s.buttonChangeStartValue}>
                            <button className={s.buttonChangeStartValueText} onClick={this.changeStartValue}
                                    disabled={this.props.state.counterEditMode}>Change Start Values
                            </button>
                        </div>
                    </div>
                </ul>
                <ul>
                    <div className={s.BacgraundOne}>
                        <div className={s.bacgraundInputMax}>
                            <ul>
                                <h6>Max value: <input type="number" onChange={this.handleChangeMax}
                                                      value={this.props.highLimit} disabled={this.props.state.editMode}>

                                            </input>
                                </h6>
                            </ul>
                        </div>
                        <div className={s.bacgraundInputMin}>
                            <ul>
                                <h6>Min value: <input type="number" onChange={this.handleChangeMin}
                                                      value={this.props.lowLimit} disabled={this.props.state.editMode}/></h6>
                            </ul>
                        </div>
                        <div className={s.bacgraundInputStart}>
                            <ul>
                                <h6>Start value: <input type="number" onChange={this.handleChangeStart}
                                                        value={this.props.count} disabled={this.props.state.editMode}/></h6>
                            </ul>
                        </div>
                        <button className={s.bacgraundSet} disabled={this.props.state.editMode}
                                onClick={this.setValues}>Set
                        </button>
                    </div>
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        state: state,
        highLimit: state.highLimit,
        lowLimit: state.lowLimit,
        count: state.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMaxValue(highLimit) {
            dispatch(setMaxValueAC(highLimit));
        },
        setMinValue(lowLimit) {
            dispatch(setMinValueAC(lowLimit));
        },
        setStartValue(count) {
            dispatch(setStartValueAC(count));
        },
        setNewValue() {
            dispatch(setValueAC());
        },
        setReset() {
            dispatch(setResetAC());
        },

        changeStartValues() {
            dispatch(changeStartValuesAC());
        }
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(App);;

