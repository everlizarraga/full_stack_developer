var posts = [
    {
        id: 1,
        nombre: "Ever",
        apellido: "Lizarraga",
        edad: 29,
        image: 'https://img.com/1',
        tags: ['tag0','tag1','tag2','tag3','tag4']
    },
    {
        id: 2,
        nombre: "Fiorella",
        apellido: "Lizarraga",
        edad: 22,
        image: 'https://img.com/fiore',
        tags: ['tag0','tag1','tag2','tag3','tag4']
    },
    {
        id: 1,
        nombre: "Violeta",
        apellido: "Sanchez",
        edad: 52,
        image: 'https://img.com/viole',
        tags: ['tag0','tag1','tag2','tag3','tag4']
    },
    {
        id: 1,
        nombre: "Bernardo",
        apellido: "Lizarraga",
        edad: 51,
        image: 'https://img.com/2',
        tags: ['tag0','tag1','tag2','tag3','tag4']
    }
]

posts.find(coso => coso.apellido == 'Lizarraga');

posts.some(coso => coso.id == 1);

posts.some(coso => coso.tags.includes('tag3'));

posts.every(coso => coso.tags.includes('tag3'));

posts.map(coso => coso.nombre);

posts.filter(coso => coso.tags.includes('tag4'));
posts.filter(coso => coso.apellido == 'Lizarraga');