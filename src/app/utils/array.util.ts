export class ArrayUtil {

    public static randomizeOrder<T>(array: T[]) {
        for (let i = 0; i < array.length; i++) {
            let value = array[i];
            let j = Math.floor(Math.random() * array.length);
            array[i] = array[j]
            array[j] = value
        }
    }

}