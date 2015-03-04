import DS from 'ember-data';

var Jobs = DS.Model.extend({
  title: DS.attr(),
  city: DS.attr(),
  price: DS.attr(),
  job_time: DS.attr('boolean'),
  description: DS.attr()
});

Jobs.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "123",
      city: 'Київ',
      price: '3500',
      job_time: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?'
   },
   {
      id: 2,
      title: "Senior Ruby Developer в GlobalLogic",
      city: 'Львів',
      price: '3500',
      job_time: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?'
    },
    {
      id: 3,
      title: "Senior Ruby Developer в GlobalLogic",
      city: 'Луцьк',
      price: '3500',
      job_time: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?'
  }
]});

export default Jobs;