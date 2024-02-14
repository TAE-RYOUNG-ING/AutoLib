/**
 * @class
 * @classdesc 강아지와 고양이를 설명하는 클래스
 * @example 
 * new LingLing(dog, cat)
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

    /**
     * @static 
     * @description 언제든 귀여운 갱얼쥐를 부를 수 있따
     * @example LingLing.printDog();
     */
    static printDog() {
        console.log(this.dog);
    }
}