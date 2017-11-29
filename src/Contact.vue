<template>
  <div class="c-card__item contact">
    <div class="o-grid o-grid--center">
      <div class="o-grid__cell o-grid__cell--width-fixed">
        <div class="o-grid-text">
          <div class="c-avatar u-small" :data-text="avatarText"></div>
        </div>
      </div>
      <div class="o-grid__cell">
        <div>{{ contact.name }}</div>
        <div class="u-small">
          <span>Phone:</span>
          <a :href="phoneLink" class="c-link">{{contact.phone}}</a>
        </div>
      </div>
      <div class="o-grid__cell o-grid__cell--width-fixed">
        <div class="o-grid-text">
          <a href="javascript://" class="c-link c-link--error" @click="$emit('remove')">Remove</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['contact'],
    computed: {
      avatarText() {
        return this.contact.name.split(' ').slice(0, 2).map(item => item.charAt(0)).join('');
      },
      phoneLink() {
        let phone = this.contact.phone.split(' ').join('');
        return `tel:${phone}`;
      }
    }
  }
</script>

<style lang="scss">
  .contact:not(:last-child) {
    border-bottom: 1px solid black;
  }
</style>
