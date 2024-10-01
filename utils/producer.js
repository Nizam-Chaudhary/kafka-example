const  { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
  await producer.connect()

  await producer.send({
    topic: 'test_topic',
    messages: [
      { value: 'Hello consumer I hope you are fine!' },
    ]
  })

  console.log('Message sent successfully')
}

module.exports = run