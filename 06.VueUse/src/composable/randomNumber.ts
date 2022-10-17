export const useNumber = () => {
    const getNumber = () => {
        const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const shupple = [];
        for (let i = 0; i < 4; i++) {
            const choice = candidate.splice(
                Math.floor(Math.random() * candidate.length),
                1,
            )[0];
            shupple.push(choice);
        }
        return shupple;
    };
    return { getNumber };
};
