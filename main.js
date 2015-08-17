var info = require('info')();
var roles = {
	harvester: require('harvester'),
	builder: require('builder')
};

for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	if (roles[creep.memory.role]) {
		roles[creep.memory.role](creep);
	}

}