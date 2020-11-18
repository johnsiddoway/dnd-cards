function Page() {
    var self = this;
    self.abilityScoreModifiers = [0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
    self.crToXP = new Map();
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
        self.crToXP = new Map([
            [0, 10],
            ['1/8', 25],
            ['1/4', 50],
            ['1/2', 100],
            [1, 200],
            [2, 450],
            [3, 700],
            [4, 1100],
            [5, 1800],
            [6, 2300],
            [7, 2900],
            [8, 3900],
            [9, 5000],
            [10, 5900],
            [11, 7200],
            [12, 8400],
            [13, 10000],
            [14, 11500],
            [15, 13000],
            [16, 15000],
            [17, 18000],
            [18, 20000],
            [19, 22000],
            [20, 25000],
            [21, 33000],
            [22, 41000],
            [23, 50000],
            [24, 62000],
            [25, 75000],
            [26, 90000],
            [27, 105000],
            [28, 120000],
            [29, 135000],
            [30, 155000]
        ]);
	};
}