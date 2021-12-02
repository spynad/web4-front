<template>
    <form class="main-form" name="main-form">
            <div class="graph">
                <div class="graph__wrapper">
                    <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" >
                        <defs>
                            <marker id='arrow-head' orient="auto"
                                    markerWidth='2' markerHeight='4'
                                    refX='0.1' refY='2'>
                                <path d='M0,0 V4 L2,2 Z' fill="black"></path>
                            </marker>
                        </defs>
                        <polygon points="0 0, 0 40, 80 0" fill="rgb(0, 160, 223)"></polygon>
                        <rect x="0" y="-80" width="40" height="80" fill="rgb(0, 160, 223)"></rect>
                        <path fill="rgb(0, 160, 223)" d="M 0,-80 a 80,80 0 0 0 -80,80 L 0 0 Z"></path>
                        <path
                                d="M -95 0, h 190"
                                stroke="black"
                                stroke-width="1"
                                marker-end="url(#arrow-head)"></path>
                        <path
                                d="M 0 95, v -190"
                                stroke="black"
                                stroke-width="1"
                                marker-end="url(#arrow-head)"></path>
                        <text x="92" y="-3" class="graph__inscription">x</text>
                        <text x="3" y="-92" class="graph__inscription">y</text>
                        <text x="36" y="-3" class="graph__inscription">R/2</text>
                        <text x="-47" y="-3" class="graph__inscription">-R/2</text>
                        <text x="3" y="42" class="graph__inscription">-R/2</text>
                        <text x="3" y="-38" class="graph__inscription">R/2</text> 
                        <text x="78" y="-3" class="graph__inscription">R</text>
                        <text x="-84" y="-3" class="graph__inscription">-R</text>
                        <text x="3" y="82" class="graph__inscription">-R</text>
                        <text x="3" y="-78" class="graph__inscription">R</text>

                        <circle cx="0" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="40" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="-40" r="1.5" fill="black"></circle>
                        <circle cx="40" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="-40" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="80" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="-80" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="80" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="-80" r="1.5" fill="black"></circle>
                    </svg>
                </div>
            </div>
            <h3 class="main-form__text text_x">Выберите изменение по X:</h3>
            <table>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-4">
                    </label>-4</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-3">
                    </label>-3</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-2">
                    </label>-2</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-1">
                    </label>-1</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="0">
                    </label>0</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="1">
                    </label>1</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="2">
                    </label>2</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="3">
                    </label>3</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="4">
                    </label>4</td>
                </tr>
            </table>
            <h3 class="main-form__text text_y">Напишите изменение по Y:</h3>
            <p><label>
                <input class="main-form__input-text input_text" maxlength="15" type="text" name="y" placeholder="(-5;3)" size="13">
            </label></p>
            <h3 class="main-form__text text_r">Выберите изменение по R:</h3>
            <table>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-5">
                    </label>-5</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-4">
                    </label>-4</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-3">
                    </label>-3</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-2">
                    </label>-2</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-1">
                    </label>-1</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="0">
                    </label>0</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="1">
                    </label>1</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="2">
                    </label>2</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="3">
                    </label>3</td>
                </tr>
            </table>
            <p>
                <input class="main-form__input-button button" type="button" id="send" value="Отправить">
                <input class="main-form__input-button button" type="button" id="reset" value="Сброс таблицы">
            </p>
        </form>
</template>

<script>
export default {
    name: "Main"
}

</script>

<style scoped>
.graph {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
}

.graph__wrapper {
    display: block;
}

.graph__wrapper svg {
    width: 100%;
}

.graph__inscription{
    font-size:12px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
}
</style>