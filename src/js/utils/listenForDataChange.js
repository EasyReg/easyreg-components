import React from 'react';
import _isEqual from 'lodash/isEqual';

const listenForDataChange = (Component) => {

    class ListenForDataChange extends React.Component{
        constructor(props, context){
            super(props, context);
            this.state = props;
        }
        componentWillUpdate(nextProps, nextState, nextContext){
            if(!_isEqual(nextProps, this.state)){
                this.setState(nextProps);
            }
        }
        render(){
            return (
                React.cloneElement(<Component />, this.state)
            );
        }
    }

    return ListenForDataChange;

};

export default listenForDataChange;
