import DS from 'ember-data';

var Blog = DS.Model.extend({
  title: DS.attr(),
  city: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  author: DS.attr(),
  smallDescription: DS.attr(),
  description: DS.attr()
});

// Blog.reopenClass({
//   FIXTURES: [
//     {
//       id: 1,
//       title: "123",
//       date: '12 березня',
//       time: '14:34',
//       author: 'Богдан Вітер',
//       smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
//       description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><h2>Lorem ipsum dolor sit amet</h2> <p>consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad? </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><h3>Nam fermentum, nulla luctus pharetra vulputate</h3><p>felis tellus mollis orci, sed rhoncus sapien nunc</p>'
//    },
//    {
//       id: 2,
//       title: "Senior Ruby Developer в GlobalLogic",
//       date: '12 березня',
//       time: '14:34',
//       author: 'Богдан Вітер',
//       smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
//       description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><h2>Lorem ipsum dolor sit amet</h2> <p>consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad? </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><h3>Nam fermentum, nulla luctus pharetra vulputate</h3><p>felis tellus mollis orci, sed rhoncus sapien nunc</p>'
//     },
//     {
//       id: 3,
//       title: "Lorem ipsum dolor sit amet",
//       date: '12 березня',
//       time: '14:34',
//       author: 'Богдан Вітер',
//       smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
//       description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><h2>Lorem ipsum dolor sit amet</h2> <p>consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad? </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><h3>Nam fermentum, nulla luctus pharetra vulputate</h3><p>felis tellus mollis orci, sed rhoncus sapien nunc</p>'
//   }
// ]});

var Blog = [
  {
      id: 1,
      title: "123",
      date: '12 березня',
      time: '14:34',
      author: 'Богдан Вітер',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><h2>Lorem ipsum dolor sit amet</h2> <p>consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad? </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><h3>Nam fermentum, nulla luctus pharetra vulputate</h3><p>felis tellus mollis orci, sed rhoncus sapien nunc</p>'
   },
   {
      id: 2,
      title: "Senior Ruby Developer в GlobalLogic",
      date: '12 березня',
      time: '14:34',
      author: 'Богдан Вітер',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><h2>Lorem ipsum dolor sit amet</h2> <p>consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad? </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><h3>Nam fermentum, nulla luctus pharetra vulputate</h3><p>felis tellus mollis orci, sed rhoncus sapien nunc</p>'
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      date: '12 березня',
      time: '14:34',
      author: 'Богдан Вітер',
      smallDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad?</p><h2>Lorem ipsum dolor sit amet</h2> <p>consectetur adipisicing elit. Optio, quod. Animi natus, ipsa eveniet quos laborum iusto voluptate voluptas? Ducimus earum incidunt ratione reiciendis nisi, aperiam impedit nihil dignissimos ad? </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p><h3>Nam fermentum, nulla luctus pharetra vulputate</h3><p>felis tellus mollis orci, sed rhoncus sapien nunc</p>'
  }
];

localStorage.setItem('Blog', JSON.stringify(Blog));

export default Blog;
