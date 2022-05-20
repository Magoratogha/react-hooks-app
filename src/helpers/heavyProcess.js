export default function heavyProcess(iterations) {
    for (let index = 0; index < iterations; index++) {
        console.log('Still processing...');
    }

    return iterations + ' itertations processed.';
};