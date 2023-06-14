const feelings = ['calm','loving','sensitive','happy','energetic'];
const senses = ['sound','sight','feel','smell','taste'];
const messages = [
    'Remember that standards are a guideline, not a mandatory way.',
'both action and inaction shape your world.',
'If you think it you will project it, if you look you will see it.',
];

const randomMessage =()=>{
    let feeling = feelings[Math.floor(Math.random()*feelings.length)];
    let sense = senses[Math.floor(Math.random()*senses.length)];
    let message= messages[Math.floor(Math.random()*messages.length)];
    console.log(`Word of Advice: ${message}\nUse your imagination to generate: ${feeling} energy\nSensitize your sense of: ${sense}`)
    console.log(Math.floor(Math.random()*feelings.length))
}
randomMessage()