import React from 'react';
import "./App.css";
import * as Constants from "./constants";
import { data } from "./data";
import { customData } from "./custom-data";
import TypeAheadDropDown from './TypeAheadDropDown';

class HomePageHeader extends React.Component {
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

class HomePageMain extends React.Component {
    render() {
        const pages = this.props.pages.map((data, index) => <MonsterPage key={index} index={index} data={data.monsters} onClick={this.props.unselectMonster}/>);
        return <div className="main">{pages}</div>;
    }
}

class MonsterPage extends React.Component {
    maxSize = 4;
    monsters = [];

    currentSize() {
        var total = 0;
        for(var i = 0; i < this.monsters.length; i++) {
            total += Constants.PageSizes.get(this.monsters[i].pageSize);
        }
        return total;
    }

    canAdd(monster) {
        return this.currentSize() + Constants.PageSizes.get(monster.pageSize) <= this.maxSize;
    }

    addMonster(monster) {
        const updated = this.monsters.concat(monster).sort((a, b) => {
            if (Constants.PageSizes.get(a.pageSize) < Constants.PageSizes.get(b.pageSize)) return -1;
            if (Constants.PageSizes.get(a.pageSize) > Constants.PageSizes.get(b.pageSize)) return 1;
            return a.name.localeCompare(b.name);
        });
        this.monsters = updated; // I know, probably not valid React.
        return updated;
    }

    render() {
        const cname = this.props.index === 0 ? "page" : "page break-before";
        const statblocks = this.props.data.map((data, index) => <Monster key={index} data={data} onClick={() => this.props.onClick(data)}/>);
        return <div className={cname}>{statblocks}</div>;
    }
}

function Monster(props) {
    if (!props.data.pageSize) return <div></div>;
    var modifiers = props.data.abilityScores.map((score, index) => {
        const modifier = (score >= 10 ? "+" : "") + Constants.AbilityScoreModifiers[score];
        return <td key={index}>{score} ({modifier})</td>
    });
    var abilityScores = (
        <table>
            <thead>
                <tr><th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th></tr>
            </thead>
            <tbody>
                <tr>{modifiers}</tr>
            </tbody>
        </table>
    );
    var abilities = props.data.abilities.map((ability, index) => {
        var spells = ability.spells
            ? ability.spells.map((spell, index) => <div key={index}>{spell.level} <em>{spell.spells}</em></div>)
            : null;
        return (
            <div key={index}>
                <strong>{ability.name}</strong> {ability.description}
                {spells}
            </div>
        )
    });
    var actions = props.data.actions.map((action, index) => {
        var header = index === 0 ? <h3>Actions</h3> : null;
        return (
            <div key={index}>
                {header}
                <strong>{action.name}</strong> {action.description}
            </div>
        );
    });
    var armorClass = <div><strong>Armor Class: {props.data.armorClass}</strong></div>;
    var challengeRating = <div className="challenge-rating float-right">CR: {props.data.challengeRating} ({Constants.CRtoXP.get(props.data.challengeRating)} XP)</div>;
    var conditionImmunities = <MonsterStat key={`conditionImmunities`} name={`Condition Immunities`} description={props.data.conditionImmunities} />
    var creatureTypeAndAlignment = <div className="creature-type"><em>({props.data.creatureSize} {props.data.creatureType}, {props.data.creatureAlignment})</em></div>;
    var damageVulnerabilities = <MonsterStat key={`damageVulnerabilities`} name={`Damage Vulnerabilities`} description={props.data.damageVulnerabilities} />
    var damageResistances = <MonsterStat key={`damageResistances`} name={`Damage Resistances`} description={props.data.damageResistances} />
    var damageImmunities = <MonsterStat key={`damageImmunities`} name={`Damage Immunities`} description={props.data.damageImmunities} />
    var hitPoints = <div><strong>Hit Points: {props.data.hitPoints}</strong> ({props.data.hitPointsDescription})</div>;
    var languages = <MonsterStat key={`languages`} name={`Languages`} description={props.data.languages} />
    var legendaryActionsDescription = props.data.legendaryActions.description
        ? <div><h3>Legendary Actions</h3> {props.data.legendaryActions.description}</div>
        : null;
    var legendaryActions = props.data.legendaryActions.description
        ? props.data.legendaryActions.actions.map((action, index) => <div key={index}><strong>{action.name}</strong> {action.description}</div>)
        : null;
    var name = <div className="name">{props.data.name}</div>;
    var skills = <MonsterStat key={`skills`} name={`Skills`} description={props.data.skills} />
    var savingThrows = <MonsterStat key={`savingThrows`} name={`Saving Throws`} description={props.data.savingThrows} />
    var senses = <MonsterStat key={`senses`} name={`Senses`} description={props.data.senses} />
    var speed = <div><strong>Speed:</strong> {props.data.speed}</div>;
    var spellcastingDescription = <MonsterStat key={`spellcastingDescription`} name={`Spellcasting`} description={props.data.spellcasting.description} />
    var spellcastingSpells = props.data.spellcasting.description
        ? props.data.spellcasting.spells.map((spell, index) => <div key={index}>{spell.level} ({spell.slots}): <em>{spell.spells}</em></div>)
        : null;

    return (
        <div className={`stat-block ${props.data.pageSize}`} onClick={props.onClick}>
            <div className="stat-header">
                {challengeRating}
                {name}
                {creatureTypeAndAlignment}
            </div>
            <div className="stat-body">
                <div className="stat-basics">
                    {armorClass}
                    {hitPoints}
                    {speed}
                    {abilityScores}
                </div>
                {savingThrows}
                {skills}
                {damageVulnerabilities}
                {damageResistances}
                {damageImmunities}
                {conditionImmunities}
                {senses}
                {languages}
                {abilities}
                {spellcastingDescription}
                {spellcastingSpells}
                {actions}
                {legendaryActionsDescription}
                {legendaryActions}
            </div>
        </div>
    );
};

function MonsterStat(props) {
    if (!props.description) return "";
    else return <div><strong>{props.name}</strong> {props.description}</div>
}

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
