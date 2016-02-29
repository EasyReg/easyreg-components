import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form.jsx';

const formGroups = [
        [
            {
                type: 'text',
                name: 'firstName',
                required: true
            },
            {
                type: 'text',
                name: 'lastName'
            }
        ],
        {
            type: 'textarea',
            name: 'description'
        },
        {
            type: 'file',
            name: 'image'
        }
];

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section>
                <Form fields={formGroups} />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
