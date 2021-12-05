<template>
    <div class="content content-width">
            <div class="graph">
                <div class="graph__wrapper">
                    <svg class="main-form__svg" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" @click="sendPointFromSvg">
                        <defs>
                            <marker id='arrow-head' orient="auto"
                                    markerWidth='2' markerHeight='4'
                                    refX='0.1' refY='2'>
                                <path d='M0,0 V4 L2,2 Z' fill="black"></path>
                            </marker>
                        </defs>
                        <polygon class="triangle" points="0 0, 0 20, 40 0" fill="rgb(0, 160, 223)"></polygon>
                        <rect class="rectangle" x="0" y="-40" width="20" height="40" fill="rgb(0, 160, 223)"></rect>
                        <path class="circle" fill="rgb(0, 160, 223)" d="M 0,-40 a 40,40 0 0 0 -40,40 L 0 0 Z"></path>
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
                        <text x="12" y="-3" class="graph__inscription">R/2</text>
                        <text x="-31" y="-3" class="graph__inscription">-R/2</text>
                        <text x="3" y="23" class="graph__inscription">-R/2</text>
                        <text x="3" y="-17" class="graph__inscription">R/2</text> 
                        <text x="37" y="-3" class="graph__inscription">R</text>
                        <text x="-47" y="-3" class="graph__inscription">-R</text>
                        <text x="3" y="43" class="graph__inscription">-R</text>
                        <text x="3" y="-37" class="graph__inscription">R</text>

                        <circle cx="0" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="20" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="-20" r="1.5" fill="black"></circle>
                        <circle cx="20" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="-20" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="40" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="-40" cy="0" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="40" r="1.5" fill="black"></circle>
                        <circle cx="0" cy="-40" r="1.5" fill="black"></circle>
                    </svg>
                </div>
            </div>
            <form class="main-form" name="main-form">
            <h3 class="main-form__text text_x">Выберите изменение по X:</h3>
            <table>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-4" v-model="x">
                    </label>-4</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-3" v-model="x">
                    </label>-3</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-2" v-model="x">
                    </label>-2</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="-1" v-model="x">
                    </label>-1</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="0" v-model="x">
                    </label>0</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="1" v-model="x">
                    </label>1</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="2" v-model="x">
                    </label>2</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="3" v-model="x">
                    </label>3</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="x" value="4" v-model="x">
                    </label>4</td>
                </tr>
            </table>
            <h3 class="main-form__text text_y">Напишите изменение по Y:</h3>
            <p><label>
                <input class="main-form__input-text input_text" maxlength="15" type="text" name="y" placeholder="(-3;5)" size="13" v-model.trim="y">
            </label></p>
            <h3 class="main-form__text text_r">Выберите изменение по R:</h3>
            <table>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-5" v-model="r">
                    </label>-5</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-4" v-model="r">
                    </label>-4</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-3" v-model="r">
                    </label>-3</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-2" v-model="r">
                    </label>-2</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="-1" v-model="r">
                    </label>-1</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="0" v-model="r">
                    </label>0</td>
                </tr>
                <tr>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="1" v-model="r">
                    </label>1</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="2" v-model="r">
                    </label>2</td>
                    <td><label>
                        <input class="main-form__input-radio radio" type="radio" name="r" value="3" v-model="r">
                    </label>3</td>
                </tr>
            </table>
            <p>
                <input class="main-form__input-button button button-submit" type="button" id="send" value="Отправить" @click="submitForm">
                <input class="main-form__input-button button button-reset" type="button" id="reset" value="Сброс таблицы" @click="resetPoints">
            </p>
        </form>
        <div class="result">
            <table class="result__table">
                <tr>
                    <td>X</td>
                    <td>Y</td>
                    <td>R</td>
                    <td>Результат</td>
                    <td>Time</td>
                </tr>
                <tr v-for="point in points" :key="point">
                    <td>{{point.x.toFixed(3)}}</td>
                    <td>{{point.y.toFixed(3)}}</td>
                    <td>{{point.r}}</td>
                    <td>{{point.hitResult}}</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",
    data(){
        return {
            x: "-4",
            y: "-5",
            r: "-5",
            points: new Array()
        }
    },
    watch: {
        y(value) {
            const buttonSubmit = document.querySelector(".button-submit");
            if (!isNaN(parseFloat(value)) && isFinite(value) && value <= 5 && value >= -3) {
                buttonSubmit.disabled = false;
            } else buttonSubmit.disabled = true;
        
        },
        r(value) {
            const rectangle = document.querySelector('.rectangle')
            document.querySelector('.triangle').setAttribute("points", `0 0, 0 ${20*value}, ${40*value} 0`);
            document.querySelector('.circle').setAttribute("d", `M 0,${-40*value} a ${40*value},${40*value} 0 0 0 ${-40*value},${40*value} L 0 0 Z`);
            rectangle.setAttribute("y", -40 * value);
            rectangle.setAttribute("width", 20 * value);
            rectangle.setAttribute("height", 40 * value);
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            const userDetails = JSON.parse(localStorage.getItem("userDetails"));
            if (userDetails) {
                this.axios.post("http://localhost:8081/points", {
                    x: this.x,
                    y: this.y,
                    r: this.r
                },
                {
                    headers: {"Authorization": "Bearer " + userDetails.accessToken}
                }).then(() => {
                    this.getPoints();
                }).catch(error => {
                    if (error.response.status == 401 || error.response.status == 403) {
                        this.invalidateTokenAndGoToAuthPage();
                    }
                })
            } else this.invalidateTokenAndGoToAuthPage();
        },
        resetPoints(event) {
            event.preventDefault();
            this.axios.delete("http://localhost:8081/points/", 
            {
                headers: {"Authorization": "Bearer " + JSON.parse(localStorage.getItem("userDetails")).accessToken}
            }).then(() => {
                this.getPoints();
                this.drawPoints();
            }).catch(error => {
                if (error.response.status == 401 || error.response.status == 403) {
                    this.invalidateTokenAndGoToAuthPage();
                }
            })
        },
        getPoints() {
            const userDetails = JSON.parse(localStorage.getItem("userDetails"));
            this.axios.get("http://localhost:8081/points/", {
                headers: {"Authorization": "Bearer " + userDetails.accessToken}
            }).then(response => {
                this.points = this.getPointsListFromResponse(response.data)
                this.drawPoints();
            }).catch(error => {
                alert(error.message);
                if (error.response.status == 401 || error.response.status == 403) {
                    this.invalidateTokenAndGoToAuthPage();
                }
            })
        },
        getPointsListFromResponse(json) {
            let pointsUnwraped = new Array();
            if (json._embedded !== undefined) {
                for (let jsonObj of json._embedded.pointList) {
                    pointsUnwraped.push((({ x, y, r, hitResult }) => ({ x, y, r, hitResult }))(jsonObj))
                }
            }
            return pointsUnwraped;
        },
        invalidateTokenAndGoToAuthPage() {
            localStorage.removeItem("userDetails");
            this.$router.push({name: "auth"});
        },
        drawPoints() {
          const svg = document.querySelector('.main-form__svg');
          document.querySelectorAll('.circle--point').forEach(point => point.remove());

          if (this.points) {
            for (let point of this.points) {
                const circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circleElement.classList.add('circle--point');
                circleElement.setAttribute("cx", point.x*40/this.r);
                circleElement.setAttribute("cy", -point.y*40/this.r);
                circleElement.setAttribute("r", 1);
                circleElement.setAttribute("fill", point.hitResult ? "green" : "red");
                svg.appendChild(circleElement);
            }
          }
        },
        sendPointFromSvg(event) {
            event.preventDefault();
            const svg = document.querySelector('.main-form__svg');
            const pt = svg.createSVGPoint();

            pt.x = event.clientX;
            pt.y = event.clientY;
            let loc = pt.matrixTransform(svg.getScreenCTM().inverse());

            let xSvg = loc.x/40*this.r;
            let ySvg = -loc.y/40*this.r;

            this.axios.post("http://localhost:8081/points", {
                x: xSvg,
                y: ySvg,
                r: this.r
            },
            {
                headers: {"Authorization": "Bearer " + JSON.parse(localStorage.getItem("userDetails")).accessToken}
            }).then(() => {
                this.getPoints();
            }).catch(error => {
                if (error.response.status == 401) {
                    this.invalidateTokenAndGoToAuthPage();
                }
            })
        }
    }
}

</script>

<style scoped>
.content {
    border: 1px solid #000;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
}

.content-width {
    width: 80%;
}

.main-form {
    display: block;
    padding: 5px 5px 5px 5px;
}

.graph {
    float: right;
    width: 300px;
    height: 300px;
}

.graph__wrapper svg {
    width: 100%;
}

.graph__inscription{
    font-size:9px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
}

.result {
    width: 80%;
    border: 1px solid #000;
    padding-left: 5px;
    margin: 5px auto;
}

.result__table {
    text-align: center;
    width: 100%;
}

@media(max-width: 1186px) {
    .graph {
        width: 100%;
    }

    .graph__wrapper svg {
        width: 100%;
        height: 300px;
        display: block;
        margin: auto;
    }
    .content-width {
        width: 100%;
    }

    .main-form {
        margin: 0 auto;
    }

    .result {
        width: 90%;
        border: 1px solid #000;
        margin: 5px auto;
    }
}
</style>