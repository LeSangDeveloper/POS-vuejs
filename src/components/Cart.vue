<!-- eslint-disable -->
<template>
  <b-col cols="12" lg="4" class="cart-list" v-if="cart.length > 0">
    <div class="cart-overflow">
      <b-row v-for="(value, index) in cart" :key="index" class="cart-items">
        <b-col cols="3" md="4">
          <b-img :src="url + '/' + value.product_image" fluid />
        </b-col>
        <b-col cols="5" md="5" style="padding: 0">
          <p class="name-cart"></p>
          <b-input-group>
            <b-button class="plus-minus" variant="success" >-</b-button>
            <input type="text" v-model="value.qty" class="qty" />
            <b-button class="plus-minus" variant="success" >+</b-button>
          </b-input-group>
        </b-col>
        <b-col cols="4" md="3" style="padding: 0" align-self="end">
          <p
            class="price-cart"
          >Rp. </p>
        </b-col>
      </b-row>
    </div>
    <b-row class="checkout">
      <b-col cols="6">
        <p>
          Total :
          <br />
          <span>*Tax not included</span>
        </p>
      </b-col>
      <b-col cols="6" style="text-align: end;">
        <p>Rp. *</p>
      </b-col>
      <b-button
        class="checkout-btn"
        variant="info"
        style="background: #57cad5;"
      >Checkout</b-button>
      <b-button
        class="cancel-btn"
        variant="danger"
      >Cancel</b-button>
    </b-row>
  </b-col>
</template>
<!-- eslint-disable -->
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters({ cart: 'getCart' })
  }
}
</script>
<!-- eslint-disable -->
<style scoped src="@/assets/css/style.css"></style>
