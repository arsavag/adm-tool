<script>
  // omitting the AddUpdateContact component ...
  const Contact = {
    props: ['contact'],
    components: { 'add-update-contact': AddUpdateContact },
    data () {
      return {
        showDetail: false
      }
    },
    methods: {
      onAddOrUpdateContact(contact) {
        this.$emit('save-contact', contact)
      },
      deleteContact (contact) {
        this.$emit('delete-contact', contact)
      }
    },
    template: `
      <div class="card">
        <header class="card-header">
          <p @click="showDetail = !showDetail" class="card-header-title">
            {{ contact.firstName }} {{ contact.lastName }}
          </p>
          <a class="card-header-icon" @click.stop="deleteContact(contact)">
            <span class="icon">
              <i class="fa fa-trash"></i>
            </span>
          </a>
        </header>
        <div v-show="showDetail" class="card-content">
            <add-update-contact title="Details" :contact="contact" @save-contact="onAddOrUpdateContact" />
        </div>
      </div>
    `
  }
</script>