import DS from 'ember-data';

var Events = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  company: DS.attr(),
  position: DS.attr(),
  date: DS.attr(),
  imageUser: DS.attr(),
  description: DS.attr()
});

Events.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: '123',
      author: 'Олексій Васильєв',
      city: 'Київ',
      company: 'Railsware',
      position: 'Senior Ruby Developer',
      date: '25 березня 2014 року',
      imageUser: 'http://images.clipartpanda.com/happy-computer-user-happy-computeruser.png',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum</li><li>Lorem ipsum dolor sit amet</li></ul> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 2,
      title: "Senior Ruby Developer в GlobalLogic",
      author: 'Олексій Васильєв',
      city: 'Київ',
      company: 'Railsware',
      position: 'Senior Ruby Developer',
      date: '25 березня 2014 року',
      imageUser: 'http://itexperts.co.za/wp-content/uploads/2014/10/computer-user-2.jpg',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum</li><li>Lorem ipsum dolor sit amet</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 3,
      title: "Senior Ruby Developer в GlobalLogic",
      author: 'Олексій Васильєв',
      city: 'Київ',
      company: 'GlobalLogic',
      position: 'Senior Ruby Developer',
      date: '25 березня 2014 року',
      imageUser: 'http://itexperts.co.za/wp-content/uploads/2014/10/computer-user-2.jpg',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><ul><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum</li><li>Lorem ipsum dolor sit amet</li></ul> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 4,
      title: "Senior Ruby Developer",
      author: 'Олексій Васильєв',
      city: 'Львів',
      company: 'Railsware',
      position: 'Senior Ruby Developer',
      date: '25 березня 2014 року',
      imageUser: 'http://images.clipartpanda.com/happy-computer-user-happy-computeruser.png',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet',
      author: 'Олексій Васильєв',
      city: 'Київ',
      company: 'GlobalLogic',
      position: 'Senior Ruby Developer',
      date: '25 березня 2014 року',
      imageUser: '',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
    }
]});

export default Events;
