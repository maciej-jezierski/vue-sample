<template>
  <div>
        <ul>
            <li>
                <div class="item" v-for="(item, index) in items" :key="index">
                    <div class="name">{{item.name}}</div>
                    <div class="input">
                        <button type="button" @click="item.qty = item.qty - 1">-</button>
                        <input type="text" v-model.number="item.qty" />
                        <button type="button" @click="item.qty = item.qty + 1">+</button>
                    </div>
                    <div class="price">{{ lineTotal(item) }}</div>
                    <div class="action">
                        <button type="button" @click="remove(index)">remove</button>
                    </div>

            </li>
        </ul>
        <div class="total">Total value <strong>{{total}}</strong></div>
    </div>
</template>


<script>
export default {
  computed: {
    total() {
      return this.items
        .map((it) => it.price * it.qty)
        .reduce((sum, val) => sum + val);
    },
  },
  data() {
    return {
      items: [
        { name: "Royal Bread", qty: 1, price: 1.49 },
        { name: "Honey", qty: 1, price: 1.99 },
      ],
    };
  },
  methods: {
    lineTotal(item) {
      return item.qty * item.price;
    },
    remove(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  list-style: none;
  width: 900px;
  margin: auto;
  display: flex;
  text-align: center;
}

button {
  cursor: pointer;
}

ul li {
  width: 100%;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.item div {
  padding: 16px 8px;
}

.item .name {
  flex: 1;
  text-align: left;
}

.item .price {
  width: 75px;
}

.item .action {
  width: 150px;
  text-align: right;
}

.item .input {
  display: flex;
  flex-direction: row;
}

.item .input input {
  width: 50px;
}

p {
  text-align: center;
}

.total {
  font-size: 18px;
  text-align: center;
}
</style>
