import React from 'react';
import TypeAheadDropDown from './TypeAheadDropDown';
import { MonsterPage } from './monster-page';

export class HomePageHeader extends React.Component {
    render() {
        const selected = this.props.selected
            .map((data, index) => <div key={index} className="monster noselect" onClick={() => this.props.unselectMonster(data)}>{data.name}</div>);
        return (
            <div className="header">
                <div className="selectors">
                    <div className="available">
                        <TypeAheadDropDown key="TypeAhead" monsters={this.props.available} onClick={this.props.selectMonster} />
                    </div>
                    <div className="selected">
                        {selected}
                    </div>
                </div>
            </div>
        );
    }
}

export class HomePageMain extends React.Component {
    render() {
        const pages = this.props.pages.map((data, index) => <MonsterPage key={index} index={index} data={data.monsters} onClick={this.props.unselectMonster}/>);
        return <div className="main">{pages}</div>;
    }
}