<script>
  const AddUpdateContact = {
    props: ['contact', 'title'],
    data () {
      return {
        id: this.contact ? this.contact.id : null,
        firstName: this.contact ? this.contact.firstName : '',
        lastName: this.contact ? this.contact.lastName : '',
        phone: this.contact ? this.contact.phone : ''
      }
    },
    methods: {
      save() {
        this.$emit('save-contact', { id: this.id, firstName: this.firstName, lastName: this.lastName, phone: this.phone })
        if (!this.id) {
          this.firstName = ''
          this.lastName = ''
          this.phone = ''
        }
      }
    },
    template: `
      <form class="form" @submit.prevent="save">
        <h3 class='subtitle'>{{ title }}</h3>
        <div class="field">
            <label>First Name</label>
            <div class="control">
              <input class="input" type="text" v-model="firstName">
            </div> 
        </div>
        <div class="field">
            <label>Last Name</label>
            <div class="control">
              <input class="input" type="text" v-model="lastName">
            </div> 
        </div>
        <div class="field">
            <label>Phone</label>
            <div class="control">
              <input class="input" type="text" v-model="phone">
            </div> 
        </div>
        <div class="field">
            <div class="control">
              <button class="button is-success">Save</button>
            </div> 
        </div>
      </form>
    `
  }
</script>