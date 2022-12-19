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
        complete: false,
    },
    {
        id: uuid.v4(),
        name: 'list 2',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: false,
    },
    {
        id: uuid.v4(),
        name: 'list 3',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
    {
        id: uuid.v4(),
        name: 'list 4',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
    {
        id: uuid.v4(),
        name: 'list 5',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
    {
        id: uuid.v4(),
        name: 'list 6',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
    {
        id: uuid.v4(),
        name: 'list 7',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
    {
        id: uuid.v4(),
        name: 'list 8',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
    {
        id: uuid.v4(),
        name: 'list 9 jsjsjsjsjsjsjsjjsjsjsjsjjsjsjsjjsjsjsjsjsjsjjsjsjsjsjjsjsjs',
        tags: [
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
            { id: uuid.v4(), name: 'test' },
        ],
        complete: true,
    },
];

export default lists;
