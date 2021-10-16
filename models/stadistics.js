const stadisticsSchema = {
    'id': '/stadisticsSchema',
    'type': 'object',
    'properties': {
        'id_obj': {
            'type': 'int'
        },
        'name_obj': {
            'type': 'string'
        },
        'ranking': {
            'type': 'double'
        },
        'num_view': {
            'type': 'int'
        },
        'num_download': {
            'type': 'int'
        },
        'autor': {
            'type': 'string'
        },
    },
    'required': ['id_obj', 'ranking', 'num_view', 'num_download']
};

const stadisticsSchemaUpdate = {
    'id': '/stadisticsSchema',
    'type': 'object',
    'properties': {
        'id_obj': {
            'type': 'int'
        },
        'ranking': {
            'type': 'double'
        },
        'num_view': {
            'type': 'int'
        },
        'num_download': {
            'type': 'int'
        }
    },
    'required': ['num_view']
};

module.exports = {
    stadisticsSchema,
    stadisticsSchemaUpdate
}