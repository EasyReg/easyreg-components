import React, {PropTypes} from 'react';
import listenForDataChange from '../../utils/listenForDataChange.js';
import Text from './Text.jsx';
import TextArea from './TextArea.jsx';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.textFieldNames = ['email', 'text'];
        this.renderFields = this.renderFields.bind(this);
        this.loopFields = this.loopFields.bind(this);
    }
    loopFields(data, arr){
        this.props.fields.forEach((field, i) => {
            if(Array.isArray(field)){
                this.loopFields(field, arr);
            } else{
                let Component;
                if(this.textFieldNames.includes(field.type)){
                    Component = Text;
                }
                return (
                    <Component {...field} />
                );
            }

        });
    }
    renderFields(){
        if(!this.props.fields){
            throw new Error('Form.jsx requires fields prop.');
        }
        let output = [];
        this.loopFields(this.props.fields, output);
    }
    render(){
        return (
            <form>
                {this.renderFields()}
            </form>
        );
    }
}

Form.propTypes = {
    fields: PropTypes.array.isRequired,
    className: PropTypes.string
};

Form = listenForDataChange(Form);

export default Form;
