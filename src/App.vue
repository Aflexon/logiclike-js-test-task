<template>
  <div id="app">
    <div class="o-container o-container--small">
      <div class="c-card">
        <div class="c-card__item c-card__item--divider">Contacts</div>
        <div class="c-card__item"  v-if="contacts.length === 0">
          <div class="c-paragraph">
            You phone book is empty. You can add contacts in form below.
          </div>
        </div>
        <div class="contacts">
          <contact v-for="(contact, index) in contacts"
                   :contact="contact"
                   :key="contact.id"
                   @remove="removeContact(index)"
          ></contact>
        </div>
        <div class="c-card__divider"></div>
        <div class="c-card__item c-card__item--divider">Add contact</div>
        <div class="c-card__item">
          <div class="c-paragraph">
            Enter name and phone number. Then click add button or press <kbd class="c-kbd">Enter</kbd>
          </div>
          <div class="c-input-group c-input-group--stacked">
            <div class="o-field">
              <input class="c-field"
                     placeholder="Name"
                     v-model="name"
                     @keyup.enter="$refs.phoneInput.focus()"
                     ref="nameInput"
              >
            </div>
            <div class="o-field">
              <input class="c-field"
                     placeholder="Phone number"
                     v-model="phone"
                     @keyup.enter="addContact"
                     ref="phoneInput"
              >
            </div>
            <button class="c-button c-button--block c-button--info" @click="addContact">Add</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Contact from './Contact.vue';
const APP_STORAGE_KEY = 'contactsApp'
export default {
  name: 'app',
  data () {
    return {
      name: '',
      phone: '',
      contacts: []
    }
  },
  mounted() {
    let appState = localStorage.getItem(APP_STORAGE_KEY, {contacts: this.contacts})
    try {
      if (appState) {
        this.contacts = JSON.parse(appState).contacts;
      }
    } catch (err) {
      console.error(err);
    }
  },
  watch: {
    contacts: {
      handler () {
        localStorage.setItem(APP_STORAGE_KEY, JSON.stringify({contacts: this.contacts}));
      },
      deep: true
    }
  },
  methods: {
    addContact() {
      let contact = {
        id: this.$uuid(),
        name: this.name,
        phone: this.phone
      }
      this.contacts.push(contact);
      this.clear();
    },
    removeContact(index) {
      this.contacts.splice(index, 1);
    },
    clear() {
      this.name = '';
      this.phone = '';
      this.$refs.nameInput.focus();
    }
  },
  components: {
    Contact
  }
}
</script>

<style lang="scss" src="blaze/scss/blaze.scss"></style>

