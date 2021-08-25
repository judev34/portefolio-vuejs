<template>
    <div class="container mt-5 mb-5 mt-3 flex-grow-1 p-0">
        <h1 class="text-center">Restons en contact</h1>
        <form id="app"
            @submit="checkForm"
            action=""
            method="post" 
            class="mt-5"
        >
        <p v-if="errors.length">
            <b>Corrigez le(s) erreur(s) suivante(s):</b>
            <ul>
                <li v-bind:key="index" v-for="(error, index) in errors">{{ error }}</li>
            </ul>
        </p>
        <div class="form-group">
            <input v-model="firstname" type="text" class="form-control" id="lastname" name="lastname" placeholder="Nom de famille">
        </div>
        <div class="form-group">
            <input v-model="lastname" type="text" class="form-control" id="firstname" name="firstname" placeholder="Prénom">
        </div>
        <div class="form-group">
            <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="Email : nom@exemple.com">
        </div>
        <div class="form-group">
            <textarea v-model="message" class="form-control" id="message" name="message" rows="3" placeholder="saisir votre message"></textarea>
        </div>
        <div>
            <button type="submit" value="Submit" class="btn btn-dark" disabled>Envoyer</button>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            errors: [],
            lastname: null,
            firstname: null,
            email: null,
            message: null
        }
    },
    methods: {
        checkForm: function (e) {
        if (this.name && this.age) {
            return true;
        }

        this.errors = [];

        if (!this.name) {
            this.errors.push('Le nom est requis');
        }

        if (!this.firstname) {
            this.errors.push('Le prénom est requis');
        }
        if (!this.email) {
            this.errors.push('le champs Email est requis');
        }
        if (!this.message) {
            this.errors.push('le champs message est requis');
        }

        e.preventDefault();
        }    
    },
    components: {

    }
}
</script>

<style>

</style>