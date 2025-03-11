const useLocaldate = () => {
    const localDate = new Date();
    const horario = `${localDate.getHours()}:${localDate.getMinutes()}:${localDate.getSeconds()}`;
    return({})
}
export default useLocaldate