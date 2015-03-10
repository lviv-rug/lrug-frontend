import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('jobs');
  this.resource('job', { path: 'jobs/:jobs_id' });
  this.resource('blogs');
  this.resource('blog', { path: 'blogs/:blogs_id' });
});

export default Router;
