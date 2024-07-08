<template>
    <div class="bg-white shadow rounded-xl">
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
</template>
<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';

const { meal } = defineProps({
    meal:Object
})

</script>