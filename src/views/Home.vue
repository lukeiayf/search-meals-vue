<template>
    <div class="flex flex-col items-center p-8 justify-center">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals" />
        <div class="flex justify-center gap-2 mt-2">
            <RouterLink :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters.split('')"
                :key="letter">
                {{ letter }}
            </RouterLink>
        </div>
    </div>

</template>
<script setup>
import { computed } from 'vue';
import store from '../store';
import { RouterLink } from 'vue-router';

const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
</script>