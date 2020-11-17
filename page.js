function Page() {
    var self = this;
    self.abilityScoreModifiers = [0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
    self.monsters = ko.observableArray();
    self.monstersSelected = ko.observableArray();

    self.selectMonster = function(monster) {
        var clone = Object.assign({}, monster);
        // By setting an id field on the clone to something mostly random, it'll let me remove them one at a time.
        // By not setting this on the input monster, I can treat each clone as (hopefully) truly unique.
        clone.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        self.monstersSelected.push(clone);
    }

    self.removeMonster = function(monster) {
        self.monstersSelected.remove(monster);
    }

    self.init = function (monsters) {
		// Bind server model to knockout model
		ko.utils.arrayPushAll(self.monsters, monsters);
	};
}