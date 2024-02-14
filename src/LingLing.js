/**
 * @class
 * @classdesc 강아지와 고양이를 설명하는 클래스
 */
class LingLing {
    /**
     * 
     * @param {string} dog 갱얼쥐~~ 
     * @param {string} cat 고영희입니다~
     */
    constructor(dog, cat) {
        this.dog = dog;
        this.cat = cat;
    }

    getDog() {
        return this.dog;
    }

    setDog(dog) {
        this.dog = dog;
    }

    static printDog() {
        console.log(this.dog);
    }
}