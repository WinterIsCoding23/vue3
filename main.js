const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addCart(id) {
      this.cart.push(id);
    },
    removeCart(id) {
      this.cart.pop(id);
    },
    // solution:
    //   removeById(id) {
    //     const index = this.cart.indexOf(id)
    //         if (index > -1) {
    //             this.cart.splice(index, 1)
    //         }
    // }
    // solution
  },
});
