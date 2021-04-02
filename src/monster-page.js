import React from 'react';
import * as Constants from './constants';
import { Monster } from './monster';

export class MonsterPage extends React.Component {
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