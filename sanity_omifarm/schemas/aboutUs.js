export default {
    name: 'aboutUs',
    title: 'AboutUS',
    type: 'document',
    fields: [
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'descImg',
            title: 'DescImg',
            type: 'image',
        },
        {
            name: 'whyUs',
            title: 'WhyUs',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'mision',
            title: 'Mision',
            type: 'string',
        },
        {
            name: 'misionImg',
            title: 'MisionImg',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'vision',
            title: 'Vision',
            type: 'string',
        },
        {
            name: 'visionImg',
            title: 'VisionImg',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'history',
            title: 'History',
            type: 'string',
        },
        {
            name: 'historyImg',
            title: 'HistoryImg',
            type: 'array',
            of: [{type: 'image'}]
        },
    ],
  };