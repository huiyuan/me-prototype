import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;

inflector.uncountable('me');

export default DS.RESTAdapter.extend({
	// host: 'http://localhost:8888',
	namespace: 'api'
});
