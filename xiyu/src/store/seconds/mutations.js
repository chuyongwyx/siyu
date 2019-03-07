export default {
    handleSecondsAcc(state,data){
		state.data = state.data.concat(data.queryPage.data);
	}
}