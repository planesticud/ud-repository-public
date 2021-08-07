const publicarSchema = {
    'id': '/publicarSchema',
    'type': 'object',
    'properties': {
        'idobj': { 'type': 'int' },
        'revisor': { 'type': 'string' },
        'observacion': { 'type': 'string' },
        'estado': { 'type': 'string' }
    },
    'required': ['idobj', 'revisor', 'observacion', 'estado']
};

const publicarSchemaUpdate = {
    'id': '/publicarSchema',
    'type': 'object',
    'properties': {
        'idobj': { 'type': 'int' },
        'revisor': { 'type': 'string' },
        'observacion': { 'type': 'string' },
        'estado': { 'type': 'string' }
    },
    'required': ['id']
};

module.exports = {
    publicarSchema,
    publicarSchemaUpdate
}
