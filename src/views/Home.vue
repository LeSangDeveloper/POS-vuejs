<!-- eslint-disable -->
<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="8" class="header">
        <Header text="Menu" />
      </b-col>
      <Counter />
    </b-row>

    <b-row>
        <Inventory />
        <CartEmpty />
        <Cart />
    </b-row>

    <Sidebar />

  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import Counter from '@/components/Counter'
import Inventory from '@/components/Inventory'
import CartEmpty from '@/components/CartEmpty'
import Cart from '@/components/Cart'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Home',
  components: {
    Header,
    Counter,
    Inventory,
    CartEmpty,
    Cart,
    Sidebar
  },
  computed: {
    ...mapGetters({ cart: 'getCart' })
  }
}
</script>
<!-- eslint-disable -->
<style scoped src="@/assets/css/style.css">

</style>