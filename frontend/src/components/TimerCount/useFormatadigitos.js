const useFormatadigitos = () => {
    const getDigits = (number) => String(number).padStart(2, "0").split("");
    return({
        getDigits
    })
}
export default useFormatadigitos