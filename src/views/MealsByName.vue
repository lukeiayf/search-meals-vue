<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyWord" class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for meals" @change="searchMeals" />

    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
            </RouterLink>
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam harum perferendis
                    nulla quam,
                    nam inventore accusamus eligendi.</p>
                <div class="flex items-center justify-between">
                   <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const keyWord = ref('');
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyWord.value);
}

onMounted(() => {
    keyWord.value = route.params.name
    if (keyWord.value) {
        searchMeals();
    }
})
</script>