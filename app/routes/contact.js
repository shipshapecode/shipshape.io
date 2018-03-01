import { get, setProperties } from '@ember/object';
import Changeset from 'ember-changeset';
import ContactValidations from '../validations/contact';
import Route from '@ember/routing/route';
import lookupValidator from 'ember-changeset-validations';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  headData: service(),

  model() {
    return this.store.createRecord('contact');
  },

  afterModel() {
    return setProperties(this.headData, {
      title: 'Contact Us - Ship Shape',
      description:
      'Let\'s create some amazing things together. We do Ember app development, Ember training, sponsored ' +
      'open source work, and anything and everything Ember. To get started on your Ember training or Ember consulting project, ' +
      'shoot us an email or fill out the contact form.',
      type: 'website',
      url: 'https://shipshape.io/contact/'
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('contact', new Changeset(
      model,
      lookupValidator(ContactValidations),
      ContactValidations
    ));
  },

  actions: {
    sendContactRequest(contact) {
      if (get(contact, 'isValid')) {
        return contact.save()
          .then(this._successMessage.bind(this))
          .catch(this._errorMessage.bind(this));
      } else {
        get(contact, 'errors').forEach((error) => {
          this.flashMessages.danger(error.validation[0]);
        });
      }
    }
  },

  _successMessage() {
    this.flashMessages.success('Thanks for contacting us! We\'ll be in touch shortly.');
  },

  _errorMessage() {
    this.flashMessages.danger('Something went wrong :(. Please refresh and try again.');
  }
});
