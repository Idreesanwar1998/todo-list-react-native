import uuid from 'react-native-uuid';
// use dummy data for now
const lists = [
    {
        id: uuid.v4(),
        name: 'list 1',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
    },
    {
        id: uuid.v4(),
        name: 'list 2',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
    },
    {
        id: uuid.v4(),
        name: 'list 3',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
    },
    {
        id: uuid.v4(),
        name: 'list 4',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
    },
    {
        id: uuid.v4(),
        name: 'list 5',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
    },
];

export default lists;
