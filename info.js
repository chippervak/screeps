/*
 Just some basic info right now. Like how many of each role we have.
 */
module.exports = function () {
	var info = {
		count: {}
	};

	for (var name in Game.creeps) {
		var creep = Game.creeps[name];
		if (info.count[creep.memory.role]) {
			info.count[creep.memory.role]++;
		} else {
			info.count[creep.memory.role] = 0;
		}
	}

	return {
		getInfo: function () {
			return info;
		}

	};
}