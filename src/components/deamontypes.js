import { config } from '../config/config';

export const Deamons = (() => {

    let nice = {
        skill: 20,
        courage: 10,
        motivation: 10,
        fear: 10,
        level: 'nice',
    }

    let bad = {
        skill: 30,
        courage: 20,
        motivation: 20,
        fear: 20,
        level: 'bad',
    }

    let realBad = {
        skill: 40,
        courage: 30,
        motivation: 30,
        fear: 30,
        level: 'realBad',
    }
    const badness = () => [nice, bad, realBad];

    return {
        badness,
    };
})();

export default Deamons;