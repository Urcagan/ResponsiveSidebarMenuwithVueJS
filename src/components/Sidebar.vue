<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">  
            <img src="../assets/vue.svg" alt="Vue">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
    </aside>
</template>

<script setup> 
import { ref } from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;

    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo {
        margin-bottom: rem;
        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        // border: 1px solid #ece89d;
        display: flex;
        justify-content: end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;
    
        .menu-toggle{
            transition: 0.3s ease-out; 

            .material-icons {                   // свойства стрелки : размер, цвет
                font-size: 2rem;
                color: var(--light);
                transition: 0.2 ease-out;
            }

            &:hover {                               // свойства при наведении на стрелку
                .material-icons {
                    color: var(--primary);          // изменение цвета
                    transform: translateX(0.5rem);  // смещение по оси Х 
                }
            }
        }
    }

    &.is-expanded {                         // свойства в меню в развернутом полажении
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -2rem;                     // в развернутом полажении поднять стрелку
            .menu-toggle {
                transform: rotate(-180deg); // поворот на 180 градусов сртелки
            }
        }
    }   

    @media (max-wedth: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>