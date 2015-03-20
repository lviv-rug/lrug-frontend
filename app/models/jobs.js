import DS from 'ember-data';

var Jobs = DS.Model.extend({
  position: DS.attr(),
  company: DS.attr(),
  city: DS.attr(),
  price: DS.attr(),
  jobTime: DS.attr(),
  email: DS.attr(),
  smallDescription: DS.attr(),
  description: DS.attr()
});

Jobs.reopenClass({
  FIXTURES: [
    {
      id: 1,
      position: "123",
      company: 'Qwerty',
      city: 'Київ',
      price: '4500',
      jobTime: true,
      email: '',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum</li><li>Lorem ipsum dolor sit amet</li></ul> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 2,
      position: "Senior Ruby Developer",
      company: 'GlobalLogic',
      city: 'Львів',
      price: '3000',
      jobTime: true,
      email: '',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum</li><li>Lorem ipsum dolor sit amet</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 3,
      position: "Senior Ruby Developer",
      company: 'GlobalLogic',
      city: 'Луцьк',
      price: '3500',
      jobTime: false,
      email: '',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 4,
      position: "Senior Ruby Developer",
      company: 'Qwerty',
      city: 'Львів',
      price: '8500',
      jobTime: false,
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 5,
      position: "Lorem ipsum dolor sit amet",
      company: 'Lorem',
      city: 'Луцьк',
      price: '5000',
      jobTime: false,
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    }
]});

export default Jobs;