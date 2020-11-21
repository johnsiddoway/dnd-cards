function sortMonsters(a, b) {
    return (a.pageSize < b.pageSize)
        ? (a.name > b.name) ? 1 : -1
        : (a.name > b.name) ? 1 : -1;
}

function monsterPage() {
    var self = this;
    self.pageSizes = new Map([
        ["small", 1],
        ["medium", 2],
        ["large", 4]
    ]);
    self.maxSize = 4;
    self.monsters = ko.observableArray();
    self.currentSize = ko.computed(function(){
        var total = 0;
        for(var i = 0; i < self.monsters().length; i++) {
            total += self.pageSizes.get(self.monsters()[i].pageSize);
        }
        return total;
    });
    self.canAdd = function(monster) {
        return self.currentSize() + self.pageSizes.get(monster.pageSize) <= self.maxSize;
    }
    self.addMonster = function(monster) {
        self.monsters.push(monster);
        self.monsters.sort(sortMonsters);
    }
};

function Page() {
    var self = this;
    self.abilityScoreModifiers = [0, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
    self.crToXP = new Map();
    self.monsters = ko.observableArray();
    self.monstersSelected = ko.observableArray();
    self.pages = ko.observableArray();

    self.selectMonster = function(monster) {
        var clone = Object.assign({}, monster);
        // By setting an id field on the clone to something mostly random, it'll let me remove them one at a time.
        // By not setting this on the input monster, I can treat each clone as (hopefully) truly unique.
        clone.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        self.monstersSelected.push(clone);
        self.addMonsterToPage(clone);
    }

    self.removeMonster = function(monster) {
        self.monstersSelected.remove(monster);
        self.pages.removeAll();
        self.monstersSelected().forEach(self.addMonsterToPage);
    }

    self.addMonsterToPage = function(monster) {
        var last = self.pages()[self.pages().length - 1];
        if (last !== undefined && last.canAdd(monster)) {
            last.addMonster(monster);
        } else {
            last = new monsterPage();
            last.addMonster(monster);
            self.pages.push(last);
        }
    }

    self.init = function (monsters) {
        // Bind server model to knockout model
        ko.utils.arrayPushAll(self.monsters, monsters);
        self.monsters.sort(sortMonsters);
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
};