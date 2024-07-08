<template>
    <div class="flex justify-center gap-2 mt-2">
        <RouterLink :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters.split('')" :key="letter">
            {{ letter }}
        </RouterLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue"
import {watch, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})
</script>