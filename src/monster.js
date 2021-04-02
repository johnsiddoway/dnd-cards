import * as Constants from './constants';

export function Monster(props) {
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