import React from 'react';
import "./App.css";
import * as Constants from "./constants";
import { data } from "./data";
import { customData } from "./custom-data";
import TypeAheadDropDown from './TypeAheadDropDown';
import { HomePageHeader, HomePageMain } from './home-page';
import { MonsterPage } from './monster-page';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             // combine the SRD stats with non-SRD stats and sort the whole list
            available: data.concat(customData).sort((a, b) => a.name.localeCompare(b.name)),
            selected: [],
            pages: []
        }
    }

    addMonsterToPage(monster) {
        const pages = this.state.pages.slice();
        var last = pages[pages.length - 1];
        if (last !== undefined && last.canAdd(monster)) {
            last.addMonster(monster);
        } else {
            last = new MonsterPage();
            last.addMonster(monster);
            pages.push(last);
        }
        return pages;
    }

    selectMonster(monster) {
        const clone = Object.assign({}, monster);
        // By setting an id field on the clone to something mostly random, it'll let me remove them one at a time.
        // By not setting this on the input monster, I can treat each clone as (hopefully) truly unique.
        clone.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const available = this.state.available.slice();
        const updated = this.state.selected.concat(clone);
        const pages = this.addMonsterToPage(clone);
        this.setState({
            available: available,
            selected: updated,
            pages: pages
        });
    }

    unselectMonster(target) {
        const available = this.state.available.slice();
        const updated = this.state.selected.filter((monster) => monster !== target );
        var pages = [];
        updated.forEach(monster => {
            var last = pages[pages.length - 1];
            if (last !== undefined && last.canAdd(monster)) {
                last.addMonster(monster);
            } else {
                last = new MonsterPage();
                last.addMonster(monster);
                pages.push(last);
            }
        });
        this.setState({
            available: available,
            selected: updated,
            pages: pages
        });
    }

    render() {
        return (
            <div className="app">
                <HomePageHeader key="homePageHeader"
                    available={this.state.available}
                    selected={this.state.selected}
                    selectMonster={e => this.selectMonster(e)}
                    unselectMonster={e => this.unselectMonster(e)}/>
                <HomePageMain key="homePageMain"
                    pages={this.state.pages}
                    unselectMonster={e => this.unselectMonster(e)}/>
            </div>
        );
    };
}

export default App;
