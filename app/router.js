import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType,
  model: function () {
  	return this.store.find('me', 1);
  }
});

Router.map(function() {
  this.resource("notification", function() {});
  this.resource("profileViews", function() {});
  this.resource("content", function() {});
  this.resource("recognition", function() {});
});

export default Router;