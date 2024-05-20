<template>
  <div class="container5">
    <div class="titre">
      <h3>Me contacter</h3>
    </div>
    <br />
    <br />
    <div class="contenu3">
      <div class="form-card1">
        <div class="form-card2">
          <form class="form" @submit.prevent="handleSubmit">
            <p class="form-heading">Contactez moi</p>

            <div class="form-field">
              <input
                v-model="formData.name"
                required
                placeholder="Nom"
                class="input-field"
                type="text"
              />
            </div>

            <div class="form-field">
              <input
                v-model="formData.email"
                required
                placeholder="Email"
                class="input-field"
                type="email"
                autocomplete="off"
              />
            </div>

            <div class="form-field">
              <input
                v-model="formData.subject"
                required
                placeholder="Sujet"
                class="input-field"
                type="text"
              />
            </div>

            <div class="form-field">
              <textarea
                v-model="formData.message"
                required
                placeholder="Message"
                cols="30"
                rows="3"
                class="input-field"
              ></textarea>
            </div>

            <button type="submit" class="sendMessage-btn">Envoyer</button>
            <p v-if="message">{{ message }}</p>
          </form>
        </div>
      </div>
      <div class="coordonee">
        <div class="contact-info">
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i> Aulnay-Sous-Bois, France
            </li>
            <li><i class="fas fa-phone"></i> 07 70 13 57 88</li>
            <li>
              <i class="fas fa-envelope"></i
              ><a href="mailto:cwael1@hotmail.fr" title="Enovyez moi un mail">
                Cwael1@hotmail.fr</a
              >
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "./Footer.vue";
import axios from "axios";
export default {
  name: "FormulaireContact",
  components: {
    FooterVue,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Envoi des données du formulaire au backend
        const response = await axios.post("/contact", this.formData);
        this.message = response.data; // Message de succès ou d'erreur renvoyé par le backend
        // Réinitialisation du formulaire après l'envoi réussi
        if (response.status === 200) {
          this.formData = {
            name: "",
            email: "",
            subject: "",
            message: "",
          };
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        this.message =
          "Une erreur s'est produite lors de l'envoi du formulaire. ";
      }
    },
  },
};
</script>

<style>
.container5 {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titre {
  margin-top: 100px;
}
.contenu3 {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.coordoneecoordonee {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}
.contact-info {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 20px 0;
  font-size: 18px;
  display: flex;
  align-items: center;
}

i {
  margin-right: 10px;
  font-size: 24px;
  color: #ccc;
}
.form {
  display: flex;
  flex-direction: column;
  align-self: center;
  font-family: inherit;
  gap: 10px;
  padding-inline: 2em;
  padding-bottom: 0.4em;
  background-color: #171717;
  border-radius: 20px;
}

.form-heading {
  text-align: center;
  margin: 2em;
  color: rgba(249, 154, 84);
  font-size: 1.2em;
  background-color: transparent;
  align-self: center;
}

.form-field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 10px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #ccd6f6;
  padding-inline: 1em;
}

.sendMessage-btn {
  cursor: pointer;
  margin-bottom: 3em;
  padding: 1em;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: rgba(249, 154, 84);
  font-weight: bold;
  outline: 1px solid rgba(249, 154, 84);
  transition: all ease-in-out 0.3s;
}

.sendMessage-btn:hover {
  transition: all ease-in-out 0.3s;
  background-color: rgba(249, 154, 84);
  color: #000;
  cursor: pointer;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.form-card1 {
  background-image: linear-gradient(
    163deg,
    rgba(249, 154, 84) 0%,
    rgba(249, 154, 84) 100%
  );
  border-radius: 22px;
  transition: all 0.3s;
}

.form-card1:hover {
  box-shadow: 0px 0px 30px 1px rgb(44, 23, 7 0, 3);
}

.form-card2 {
  border-radius: 0;
  transition: all 0.2s;
}

.form-card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}
@media screen and (max-width: 768px) {
  .contenu3 {
    flex-direction: column;
    align-items: center;
  }

  .coordonee {
    margin-top: 20px;
  }

  .form-card1,
  .form-card2 {
    width: 100%;
  }
}
</style>
