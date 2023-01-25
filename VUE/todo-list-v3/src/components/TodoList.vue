<template>
    <div class="todo-list">
        <h1>Todo-List</h1>
        <input class="text-fild" type="text" @change="addToList" v-model="text"> <!--V-model adiciona os valodes digitados-->
        <ul>
            <!--V-For sempre que for para repetir um item-->
            <li v-for="(item, index) in list" :key="index">
            <span @click="toggleCheckbox(item)">
                <input type="checkbox" :checked="item.done">
                <span :class="{'done' : item.done}">{{ item.label }}</span>
            </span>
            <span @click="deleteFromList(index)"> delete </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list:[],
            text: ''
        }
    },
    //pega a lista que ficou salva no localStorage
    created(){
       this.list = JSON.parse(localStorage.getItem('list')) || []; //quando não encontrar nada ele se torna um array vazio
    },
    methods: {
        addToList() {
            //unshift adciona os itens no topo da lista, no inicio do array
            this.list.unshift({label: this.text, done: false});


            //localStorage - salva os itens/ JSON transforma o array em string
            this.updateLocalStorage();

            this.text = ''; //quando o texto é adicionado apaga o campo 
        },
        deleteFromList(index) {
            this.list.splice(index, 1);
            this.updateLocalStorage();
        },
        updateLocalStorage(){
            localStorage.setItem('list', JSON.stringify(this.list));
        },
        //muda o stattus do done
        toggleCheckbox(item) {
            item.done = !item.done;
            this.updateLocalStorage(); //avisar que mudou

        }
    }
}
</script>

<style>
    .todo-list {
        max-width: 500px;
        margin: auto;
    }

    h1 {
        text-align: center;
    }

    .text-fild {
        width: 100%;
        height: 35px;
        margin-bottom: 15px;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
    }

    li:hover {
        cursor: pointer;
    }

    .done {
        text-decoration: line-through;
    }

</style>