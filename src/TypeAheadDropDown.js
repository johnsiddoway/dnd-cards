import React from 'react';

export default class TypeAheadDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text:''
        }
    }

    onTextChange = (e) => {
        let suggestions = [];
        const value = e.target.value;
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, `i`);
            suggestions = this.props.monsters.filter(monster => regex.test(monster.name));
        }

        this.setState(() => ({
            suggestions,
            text: value
        }));
    }

    render() {
        const suggestions = this.state.suggestions.map((monster, index) => {
            return <div key={index} className="monster noselect" onClick={() => this.props.onClick(monster)}>{monster.name}</div>
        });
        const text = this.state.text;
        return (
            <>
            <input onChange={this.onTextChange} placeholder="Search For Stats!" value={text} type="text" />
            {suggestions}
            </>
        );
    }
}
