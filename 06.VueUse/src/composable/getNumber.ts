export const useNumber = () => {
    const getNumber = () => {
        const candidate = Array(45)
            .fill('')
            .map((v, i) => (v = i + 1));
        const shupple = [];
        while (0 < candidate.length) {
            const choice = candidate.splice(
                Math.floor(Math.random() * candidate.length),
                1,
            )[0];
            shupple.push(choice);
        }
        return [...shupple.slice(0, 6), shupple[shupple.length - 1]];
    };
    return { getNumber };
};
