import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('jobs');
  this.resource('job', { path: 'jobs/:jobs_id' });
  this.route('blog');
  this.resource('post', { path: 'blog/:blog_id' });
  this.route('events');
  this.resource('event', { path: 'events/:events_id' });
});

export default Router;
