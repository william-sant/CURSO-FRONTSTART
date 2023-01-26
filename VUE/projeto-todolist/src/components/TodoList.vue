<template>
  <div class="todo-list">
    <h3>Todo List</h3>
      <!--v-on:keyup observa o teclado e chama um metodo quando a tecla for acionada, nesse caso adicionando um item a lista-->
      <input type="text" class="input-new-item" v-on:keyup.enter="addNewItemToList">

      <ul>
        <li v-for="(item, index) in list" :key="index">
          <span class="list-item">
            <!--v-model adciona o checkbox em cada item-->
            <input type="checkbox" :id="index" class="item-chekbox" v-model="item.checked">
            <!--se cheked for true risca-->
            <label :for="index" :class="getItemClass(item.checked)">{{ item.label }}</label>
          </span>
          
          <!--icone lixeira-->
          <span v-html="deleteIcon" @click="deleteItem(index)"></span>
        </li>
      </ul>
  </div>
</template>

<script>
  import feather from 'feather-icons';

  export default {
    name: 'TodoList',
    data() {
      return {
        list: []
      }
    },
    //verifica se existe itens salvos para exibilos ao recarregar a pagina
    created() {
      const itensInLocalStorage = JSON.parse(localStorage.getItem('list'))
      //se existir, o item recebe o JSON.parse se não ele recebe um array vazio
      this.list = itensInLocalStorage ? itensInLocalStorage :[];
      
    },
    //icone lixeira
    computed: {
      deleteIcon() {
        return feather.icons.trash.toSvg({ 'width': 20})
      }
    },

    //adcionando itens a lista
    methods: {
      getItemClass(itemchecked){
        return itemchecked ? 'item-checked' : '';
      },
      addNewItemToList(event) {
        const newItem = event.target.value;
        this.list.unshift ({
          label: newItem, checked: false
        })
        
        //limpa o input após adicionar um item
        event.target.value = '';
      },
      //deleta o item da lista e do localStorage
      deleteItem(index) {
        this.list.splice(index, 1);
        this.updateLocalStorage();
      },
      updateLocalStorage() {
        //salvando itens no localStorage e transformando os objetos em JSON
        localStorage.setItem('list', JSON.stringify(this.list));
      }
    }

  } 
</script>

<!--o scoped faz com que o CSS não vase e vire global, todo CSS declarado no arquivo serve apenas para esse arquivo-->
<style scoped>
  .todo-list {
    width: 500px;
    margin: auto;

  }

  .input-new-item {
    width: 80%;
    height: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 80%;
    margin: 20px auto;
    text-align: left;
  }

  li, .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item-chekbox {
    margin-right: 10px;
  }

  .item-checked {
    text-decoration: line-through;
  }
</style>
