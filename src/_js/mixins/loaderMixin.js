import axios from 'axios';

export default {
  methods: {
    loadCategory(catname) {
      const loaded = this.$store.loadedCategories;
      if (loaded.indexOf(catname) < 0) {
        axios.get(`/${catname}`)
          .then((response) => {
            console.log(response);
            this.$store.commit('putCatname', catname);
          });
      }
    },
  },
};
