export default {
    handleCountDown(state) {
        let curr = new Date();
        let now = now.getTime();
        let later = new Date("2019/3/22");
        let end = later.getTime();
        let countdown = end - start;
        state.d = Math.floor(countdown / 1000 / 60 / 60 / 24);
        state.h = Math.floor(countdown / 1000 / 60 / 60 % 24);
        state.m = Math.floor(countdown / 1000 / 60 % 60);
        state.s = Math.floor(countdown / 1000 % 60);
        return {
            d,h,m,s
        }
        console.log(111)
    }

}