import React, {Component} from 'react';
import { Textfield} from 'react-mdl';

export default class Search extends Component {

    render() {
        return (
            <div>
                <Textfield
                    onChange={() => {}}
                    label="Expandable Input"
                    expandable
                    expandableIcon="search"
                />
                
            </div>
        );
    }

}