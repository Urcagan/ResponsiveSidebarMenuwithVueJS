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

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            
            <router-link class="button" to="/about">
                <span class="material-icons">visibility</span>
                <span class="text">About</span>
            </router-link>

            <router-link class="button" to="/">
                <span class="material-icons">group</span>
                <span class="text">Team</span>
            </router-link>

            <router-link class="button" to="/">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>

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
            //border: 1px solid #ece89d;
            transition: 0.3s ease-out; 

            .material-icons {                   // свойства стрелки : размер, цвет
                font-size: 2rem;
                color: var(--light);            // цвет значка ">>"
                transition: 0.2 ease-out;       // 
            }

            &:hover {                               // свойства при наведении на стрелку
                .material-icons {
                    color: var(--primary);          // изменение цвета
                    transform: translateX(0.5rem);  // смещение по оси Х 
                }
            }
        }
    }

    h3, .button .text {     // Скрыть надписи на меню
        opacity: 0;                 // установить полную прозрачноть
        transition: 0.3s ease-out;  
    }

    h3 {                            // Свойства надписи "Menu"
        color: var(--grey);          // установить серый цвет надписи
        font-size: 0.875rem;
        margin-bottom: 0.5rem;      // Отступ снизу от надписи
        text-transform: uppercase;  // Текст болшими буквами
    }

    .menu {                                 // Настройка меню
        margin: 0 -1rem;

        .button {                           // Настрройка кнопок внутри меню
            display: flex;
            align-items: center;            // положение текста кнопок по центру
            text-decoration: none;          // Убрать подчеркивание на тексте (вид гипер ссылки)

            padding: 0.5rem 1rem;           // Устанавливает внутренние отступы/поля со всех сторон элемента. 
            //                                 Одно значение применяется ко всем четырём сторонам
            //                                 Два значения применяются: 1. верхняя и нижняя и 2. левая и правая стороны
            //                                 Три значения применяются: 1. верхняя, 2. левая и правая и 3. нижняя стороны
            //                                 Четыре значения применяются**:** 1. верхняя, 2. правая, 3. нижняя и 4. левая стороны
            transition: 0.2s ease-out;
       
            .material-icons {
                font-size: 2rem;
                color: var(--light);
                // margin-right: 1rem;         // Отсеуп текста от иконки
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, .router-link-exact-active {
                background-color:  var(--dark-alt); // Подсветка заднего фона пунктов меню при наведении курсора

                .material-icons, .text {            // Изменение цвета текста и иконки при наведений курсора
                    color: var(--primary);
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

        h3, .button .text {     // Показать надписи на меню
            opacity: 1;
        }
        .menu {
            .material-icons {
                margin-right: 1rem;         // Отсеуп текста от иконки
            }
        }
    }   

    @media (max-wedth: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>